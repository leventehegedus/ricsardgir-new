import { useState, useEffect } from 'react';

interface IQuestion {
  id: number,
  question: string,
  answers: IAnswer[],
  correctId: number
}

interface IAnswer {
  id: number,
  text: string
}

interface IUserAnswer {
  questionId: number,
  answerId: number
}


const questions: IQuestion[] = [
  {
    id: 0,
    question: "Mennyi 3+1?",
    answers: [{
      id: 0,
      text: "4"
    }, {
      id: 1,
      text: "5"
    },
    {
      id: 2,
      text: "6"
    },
    {
      id: 3,
      text: "2"
    }],
    correctId: 0
  },
  {
    id: 1,
    question: "Mennyi 3+7?",
    answers: [{
      id: 0,
      text: "4"
    }, {
      id: 1,
      text: "10"
    },
    {
      id: 2,
      text: "6"
    },
    {
      id: 3,
      text: "2"
    }],
    correctId: 1
  },
  {
    id: 2,
    question: "Mennyi 3-1?",
    answers: [{
      id: 0,
      text: "4"
    }, {
      id: 1,
      text: "5"
    },
    {
      id: 2,
      text: "6"
    },
    {
      id: 3,
      text: "2"
    }],
    correctId: 3
  },
  {
    id: 3,
    question: "Mennyi 3+6?",
    answers: [{
      id: 0,
      text: "4"
    }, {
      id: 1,
      text: "5"
    },
    {
      id: 2,
      text: "6"
    },
    {
      id: 3,
      text: "9"
    }],
    correctId: 3
  },
  {
    id: 4,
    question: "Mennyi 3+2?",
    answers: [{
      id: 0,
      text: "4"
    }, {
      id: 1,
      text: "5"
    },
    {
      id: 2,
      text: "6"
    },
    {
      id: 3,
      text: "2"
    }],
    correctId: 1
  },
]

export const Quiz: React.FC = () => {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<number[]>([]);
  const [answers, setAnswers] = useState<IUserAnswer[]>([]);

  const answerTheQuestion = (question: IQuestion, answerId: number): void => {
    const answeredIds = [...answeredQuestionIds];
    if (!answeredIds.includes(question.id)) {
      answeredIds.push(question.id)
      setAnsweredQuestionIds(answeredIds)
    }
    const answersHelper = [...answers];
    let myAnswer: IUserAnswer = {questionId: 0, answerId: 0};
    myAnswer["questionId"] = question.id;
    myAnswer["answerId"] = answerId;
    answersHelper.push(myAnswer);
    setAnswers(answersHelper);
  }

  const checkIfCorrect = (questionId: number, answerId: number) => {
    let answerObject = answers.filter(answer => answer.answerId);
    if (questions[questionId].correctId === answerId) {
      return true
    }
    return false
  }

  const renderAnswerText = (question: IQuestion, answer: IAnswer): string => {
    let returnText = "";
    let answerObject = answers.filter(answer => answer.questionId === question.id)[0];
    if (answeredQuestionIds.includes(question.id)) {
      if (checkIfCorrect(question.id, answer.id)) {
        if (answerObject.answerId === question.correctId) {
          returnText += " helyes tipp";
        } else {
          returnText += " ez lett volna a helyes tipp";
        }
      } else {
        if (answerObject.answerId === answer.id) {
          returnText += " helytelen tipp";
        }
      }
    }
    return returnText;
  }

  return (
    <div className="text-white">
      {
        questions.map((question, index) => {
          return (
            <div key={index}>
              <div>{question.question}</div>
              <div>
                {question.answers.map((answer, index) => {
                  return (
                    <div key={index}>
                      <button disabled={answeredQuestionIds.includes(question.id)} onClick={() => answerTheQuestion(question, answer.id)} className="border-solid border-white border hover:text-gir-500 hover:font-black p-2 shadow-[2px_2px_0_rgb(255,255,255)] hover:shadow-[0px_0px_0_rgb(255,255,255)] hover:mt-[2px] hover:mb-[-2px] hover:ml-[2px] hover:mr-[-2px] cursor-pointer disabled:cursor-not-allowed w-64">
                        {answer.text}
                      </button>
                      <div>{renderAnswerText(question, answer)}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Quiz;
