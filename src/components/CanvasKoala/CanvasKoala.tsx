import { point } from "leaflet";
import React from "react";
import { useEffect, useState, useRef } from "react";

const cursor = {
    x: 9999,
    y: 9999
};

const params = {
    numberOfAgents: 11,
    connectionDistance: 100,
    acceleration: 1.01,
    velMin: 0.7,
    velMax: 1.2,
    radius: 27
}

let elCanvas: HTMLCanvasElement;

interface IAgent {
    pos: {
        x: number,
        y: number
    },
    vel: {
        x: number,
        y: number
    },
    radius: number,
    connections: number,
    size: number,
    isKilled: boolean,
    bounce: Function,
    turnBack: Function,
    getDistance: Function,
    update: Function,
    draw: Function,
}

const loadImage = async (url: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject();
        img.src = url;
    });
};

const imgKoala = await loadImage('/canvasImages/img_01.png') as CanvasImageSource;
const imgBg = await loadImage('/canvasImages/gir.jpg') as CanvasImageSource;
const explosion = await loadImage('/canvasImages/explosion.png') as CanvasImageSource;

class Agent implements IAgent {
    pos: { x: number; y: number; };
    vel: { x: number; y: number; };
    radius: number;
    connections: number;
    size: number;
    isKilled: boolean;

    constructor(x: number, y: number) {
        this.pos = {
            x: x,
            y: y
        };
        this.vel = {
            x: (Math.random() * params.velMin + params.velMax - params.velMin) * (Math.random() > 0.5 ? -1 : 1),
            y: (Math.random() * params.velMin + params.velMax - params.velMin) * (Math.random() > 0.5 ? -1 : 1)
        };
        this.radius = params.radius;
        this.connections = 0;
        this.size = 1;
        this.isKilled = false;
    }
    bounce(width: number, height: number) {
        if (this.pos.x <= 0 || this.pos.x >= width) {
            this.turnBack(true, false, params.acceleration)
        }
        if (this.pos.y <= 0 || this.pos.y >= height) {
            this.turnBack(false, true, params.acceleration)
        }
    }

    turnBack(coordX: number | boolean, coordY: number | boolean, acceleration = 1) {
        if (coordX) {
            this.vel.x *= -1 * (Math.abs(this.vel.x) > 2 ? 1 : acceleration);
        }
        if (coordY) {
            this.vel.y *= -1 * (Math.abs(this.vel.y) > 2 ? 1 : acceleration);
        }
    }

    getDistance(x: number, y: number) {
        const dx = this.pos.x - x;
        const dy = this.pos.y - y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        if (this.isKilled) {
            this.size -= 0.02;
        }
    }

    draw(context: any) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.rotate(this.pos.x * Math.PI / 180);
        context.lineWidth = 1;

        context.beginPath();
        context.fillStyle = 'white';
        context.strokeStyle = 'white';
        context.drawImage(imgKoala, -32 * this.size, -20 * this.size, 64 * this.size, 40 * this.size);
        if (this.isKilled) {
            context.drawImage(explosion, -24 * this.size, -24 * this.size, 48 * this.size, 48 * this.size);
        }
        context.fill();
        context.stroke();
        context.restore();
    }
}

const agents: IAgent[] = [];
const init = () => {
    for (let i = 0; i < params.numberOfAgents; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 300;
        agents.push(new Agent(x, y));
    }
}
init();

const onClick = (e: MouseEvent) => {
    const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
    const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;

    cursor.x = x;
    cursor.y = y;
    window.addEventListener('mouseup', onMouseUp);
}

const onMouseUp = () => {
    window.removeEventListener('mousedown', onClick);
    window.removeEventListener('onMouseUp', onMouseUp);

    cursor.x = 9999;
    cursor.y = 9999;
};


const CanvasKoala = (props: any) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        draw();
    }, [])


    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return
        }

        const context = canvas.getContext('2d');
        if (!context) {
            return
        }
        elCanvas = canvas;
        canvas.addEventListener('mousedown', onClick);
        let width = context.canvas.width;
        let height = context.canvas.height;
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);
        context.save();
        context.globalAlpha = 0.4;
        context.translate(width / 2, height / 2);
        context.drawImage(imgBg, -width / 2, -width / 2, width, height);
        context.restore();
        context.font = "24px IBM Plex Mono";
        context.fillStyle = 'white';
        context.fillText("klikk the koala", 42, 250);

        let connections = 0;
        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];
            const dist = agent.getDistance(cursor.x, cursor.y);
            if (dist < params.radius) {
                if (!agent.isKilled) {
                    params.acceleration *= 1.01;
                }
                agent.isKilled = true;
            }
            if (agent.isKilled && agent.size < 0.1) {
                agents.splice(i, 1);
            }
            if (agents.length === 0) {
                window.alert('Megölted az összes koalát, ezért feloszlik a zenekar. MIATTAD!');
            }
        }
        context.beginPath();
        context.arc(cursor.x, cursor.y, connections, 0, Math.PI * 2);
        context.strokeStyle = "white";
        context.stroke();


        agents.forEach(agent => {
            agent.update();
            agent.draw(context);
            agent.bounce(width, height);
        })
        window.requestAnimationFrame(draw);
    }

    return <canvas ref={canvasRef} width="300" height="300" className="gsap-card" />
}

export default CanvasKoala;
