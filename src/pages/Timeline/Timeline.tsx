import { animations } from "../../data/animations";


const movieStoryBlock = [
  { year: 2001, text: 'Mártondani megírja a Repülőgép című dalt egy két húrüsos akusztikus gitáron.' },
  { year: 2002, text: 'Mártondani megismeri Zsirai Andrist, évfolyamtársak lesznek, de még nem bandáznak együtt.' },
  { year: 2005, text: 'Szentendrén Mártondani a Lukrécia zenekarban dobol, amire Zsirai Andris elmegy a barátaival a Barlangba. Andrisnak lesz egy zenekara, a Dead Grotty, amire Dani is elnéz az egyik hétvégén.' },
  { year: 2006, text: 'Mártondani elhívja a Lukrécia búcsúkoncertjére basszerozni Zsirai Andrist, akivel utána elkezdenek ketten zenéket írni.' },
  { year: 2007, text: 'Zsirai Andris kitalálja, hogy Dani inkább gitározzon, és hagyja abba a dobolást. Elhívja a barátjához, Süli Marci edzőtermébe Danit, hogy ott legyenek ezentúl a próbák, de a zenekaruknak még nincs neve. Süli addig gitárosként dobolni kezd, Dani peidg gitározni, egymást tanítgatják, mit kell csinálni a hangszereken.' },
  { year: '', text: 'Andris és Dani ekkor írta meg a Sohasemet. Az akkori setlistben ilyen dalok szerepeltek: Támadás, Nyögős asszony, Ragaszthatatlan szív, Repülőgép, Sohasem, Laura Palmer, Magdaléna.' },
  { year: '', text: 'Pájer Alma és Mártondani közösen lépnek fel a Barlangban, Dani gépzenét csinál, Alma pedig egy vibrátorba énekel a színpadon.' },
  { year: '', text: 'A Dzsdzs summerfesten megalakul a Richard Gere Klub zenekar, amiben Pájer Alma, Mártondani, Zsirai Andris és Süli Marci zenél. A koncerten leginkább feldolgozásokat játszanak, Európa Kiadót, Balatont, de van már hat saját daluk is.' },
  { year: 2008, text: 'Pájer Alma és Mártondani szakítanak, Alma kiszáll a zenekarból.' },
  { img: './concerts/08.jpg' },
  { year: '', text: 'Zsirai Andris randizni kezd Előd Eszterrel, akit aztán Dani is randira hív a Főtérre. A konfliktust úgy oldják meg, hogy Esztert beveszik a bandába. Sülit Doór Attila kezdi helyettesíteni és Deák Edina is beszáll a zenekarba. Első közös fellépésük egy Sajnosbatár koncerten történik meg, ahol felmásznak a színpadra és se szó, se beszéd elveszik a hangszereket a Batártól. A világ legrosszabb koncertjét adják részegen, amitől Eszter zokogni kezdett és felhívta az apukáját, hogy menjen érte.' },
  { year: '', text: 'A második Dzsdzs Summerfesten a Richard Gere Klub 2 órás akusztikus koncertet ad elő, itt már szerepel a Repülőgép című dal és a Sohasem is. A zenekart ekkor Deák Edina, Előd Eszter, Doór Attila, Zsirai Andris és Mártondani alkotják. ' },
  { year: 2009, text: 'A No Remorse nevű zenekar előtt lépnek fel a Barlangban, a színpadon Mártondani bejelenti, hogy feloszlik a zenekar.' },
  { year: '', text: 'Andris elhívja egy próbára Paál Lacit szintizni, aminek Dani nem örül, mert sokkal jobbak lettek a dalok vele.' },
  { year: '', text: 'A nyáron fellépnek a harmadik Dzsdzs Summerfesten is, már Lacival kiegészülve. A közönségben ott van Pacsika Máté, aki a Gír első menedzsere lesz és Németh Bali is, aki a dobos lesz.' },
  { year: '', text: 'Rokonál Benedek, aki akkor az Ed Is Onban játszott beszáll a zenekarba, ezzel egyidőben Doór Attila helyét Pucsek András veszi át a doboknál, aki szintén az Ed Is Onban játszott. Előd Eszter miután randizni kezd Benedekkel is, végül kilép a zenekarból. Dani visszahívja Almát, de Alma egy nagyon nagy pofont ad Daninak. Ekkor születik a Nyalj fel, a Harrisonford, és az Isztambul.' },
  { year: '', text: 'A zenekarba beszáll Ozvald Enikő énekesnő, de egy hónap után, miután Benedek randizik vele Vékony Fruzsinával folytatják a Richard Gere Klubot. Laci viszont Fruzsinával randizik, ami miatt a lány kiszáll a zenekarból.' },
  { year: '', text: 'Albert Réka száll be főénekre, aki Lacinak a barátja, de Dani randizni kezd vele, és miután szakítanak, Réka kiszáll a zenekarból, de Füli András házibuliján még elénekli a Sósmuffin című dalt és hasba rúgja Danit a színpadon. Benedek aki aztán randizni kezd Rékával összetöri véletlenül a gitárját és kiszáll a zenekarból.' },
  { year: '', text: 'Pacsika Máté lesz a zenekar menedzsere, és eldöntik, hogy Dani énekeljen, Edina mellett, pedig visszakönyörgik Almát és Esztert. Kisérdi Enikő és Vészi Kriszta is énekel egy darabig, de hamar kiszállnak a bandából. Daninak kell énekelnie, amit egyáltalán nem akart.' },
  { year: 2010, text: 'A Ricsárdgír első koncertjén Verőcén végül Alma és Eszter nem jön el, mert megint randiztak a fiúkkal és rosszul sült el az egész, ezért csak Réka és Edina énekel a koncerten. Bali beszáll a zenekarba, a nevet megváltoztatják, így lesz Ricsárdgír zenekar.' },
  { year: '', text: 'Ezután Dani és Réka megint szakítanak egymással, úgyhogy Dani marad a főének. A végleges formáció így: Dani gitár, ének, dalszöveg, Laci szinti, Bali dob, Andris basszus, Edina vendégének, Boldi vendégének és a zenekar grafikusa lesz.' },
  { year: '', text: 'Próbálni kezdenek Dani anyukájának a pincéjében. Dani hegedűt akar a Ricsárdgírbe, ezért elhívja Daczi Danit hegedűlni, de véletlenül kettétöri a gitárját, Daczi Dani nem megy többet próbára.' },
  { year: 2010, text: 'Első pesti koncertünkön Laci előző zenekarával, az 1160-nal fellépünk a Filterben.' },
  { year: '', text: 'Első szentendrei koncertünk.' },
  { img: './concerts/40.jpg' },
  { year: 2011, text: 'Megjelenik első magnókazettánk, amit ingyen lehet megszerezni a koncerteken, szimpátia alapján. 30db szám van rajta, és 6db különféle borítóval adjuk. A lemez címe: Ebábuobi válogatás kazetta.' },
  { year: '', text: 'Május 11-én fellépünk az A38-on a Kettős Tamás és a Vadszamarak előtt.' },
  { year: '', text: '2011 augusztus 1-én megjelenik a Repülőgép című első videoklipünk.' },
  { year: '', text: 'A Repülőgép miatt behívnak minket az X-Faktorba, ami után sok vidéki megkeresést kapunk.' },
  { year: '', text: 'Megnyerünk egy filmfesztivált a Repülőgéppel, aminek a főnyereménye az volt, hogy közösen elmehetünk Galyatetőre.' },
  { year: '', text: '2011-ben Egerben Tarr Béla Londoni férfi című filmjének premierjén játszunk a Balaton zenekar előtt.' },
  { year: 2012, text: 'A Tudósok elhív minket előzenekarnak a Rohamba.' },
  { year: '', text: 'Az R33 tehetségkutatóján elindulunk, de a zsűri azt mondja ezzel csak a garázsig jutunk el, ahol pár haver majd meghallgatja, de pl az A38-on sosem fogunk fellépni. Az volt az egyik fődíj. ' },
  { year: '', text: 'Közönségszavazással kijutunk az Efottra.' },
  { year: '', text: 'Meghtartjuk az első búcsúkoncertünket a Barlangban, hogy minél többen eljöjjenek, de az egész egy nagy kamu.' },
  { year: '', text: 'Az első Ricsárdgír mörcsök is megjelennek, a pólókón különböző dalok szövegei szerepelnek: Do you like my lighstaber-ös Mártondanis pólók és Koala fejek és egy Kád.' },
  { year: 2013, text: '2013 január 6-án megjelenik a Szörf című videoklipünk, amiről az amerikai MTV is cikket ír.' },
  { year: '', text: 'Alma és Eszter visszatér a Ricsárdgírbe. Alma énekli a Lighstabert, Eszter pedig a Jó ez a Pestet.' },
  { year: '', text: 'Megjelenik a második magnókazettánk, amin 18 új dal szerepel, ingyen osztogatjuk őket.' },
  { year: '', text: '2013 december 28-án bemutatjuk első lemezünket, a Nicnsen Sárkányt a Barlangban, amiről koncertfilmet forgat Bollók Csaba. Ez a koncertfilm végül kijut egy holland filmfesztiválra, ahol a legjobb kísérleti film kategóriájában versenyzik és a hat napos fesztiválon ötször vetítik a mozik.' },
  { year: '', text: 'Papp Éva beszáll a Ricsárdgírbe, a lemezbemutatón pedig megalakul a TheRicsardGirls zenekar Papp Évával, Lantos Julival, Deák Edinával és Sipos Rozival.' },
  { year: 2014, text: '2014 június 29-én megjelenik az Éndalom című videoklipünk, amivel az Index címlapjára kerülünk, és sok év végi listában is szerepel.' },
  { year: '', text: 'szeptember 5-én megismerkedünk a Bohemian Betyarsszal az első Ubik fesztiválon a Limo bárban. ' },
  { year: '', text: 'a TheRicsardGirlsből kiszáll Lantos Juli és Csernovszky Juli lép a helyébe a szintiknél.' },
  { year: 2015, text: 'Borszukovszky Flóra beszáll a Ricsárdgírbe.' },
  { year: '', text: 'Elhívnak minket a Balcony Tv-be, ahol a nemzetközi balconysok a Show of the Weeknek szavazzák meg a produkciónkat, több mint 10 ország fellépői közül.' },
  { year: '', text: '2015 január 12-én megjelenik a Koala című videoklipünk, amiről az angol Videostatic cikket ír.' },
  { year: '', text: '2015 szeptember 13-án megjelenik a Palvinbarbi című videoklipünk, ami a Magyar Klipszemlén Trash kategóriában nyer, és rengetegen írnak róla.' },
  { year: '', text: 'Első Fishinges koncertünk.' },
  { year: '', text: 'Kollár-Klemencz Laci az MR2 Akusztikban feldolgozza a Repülőgép című dalunkat.október 26. ' },
  { year: '', text: 'Laci augusztus 23-án kiköltözik Berlinbe, emiatt augusztus 22-én tartunk búcsúkoncertet, hogy megteljen a hajó gyomra. Teltház lett, de csak kamu volt a feloszlásunk. 2015-ben tehát meg van az első teltházas A38, innentől ' },
  { year: 2016, text: '2016 március 3 Megjelenik a VHS kazettánk, amiből összesen 100db fogy. Ez egy másfél órás dokumentumfilm. ' },
  { year: '', text: 'Megszületik Koala Úr és létrehozza a Koala VIP csoportot a Facebookon, ami egy titkos csoport, és a Ricsárdgír közönsége léphet csak be oda.' },
  { year: '', text: 'Konsiczky Dávid a Ricsárdgír zenekar tagja lesz fél éven keresztül.' },
  { year: '', text: 'Megújul a TheRicsardGirls, Budapesten Dj-znek, Kovács Fruzsi, Deák Edina és Szőke Zsófi.' },
  { year: '', text: 'Megjelenik az első EP-nk kazettán, a Belém bújt az Ördögnóra' },
  { year: '', text: 'A Petőfi tv karácsonyi portréfilmet készít velünk, de végül az egész videót kivágják, az operatőr-rendezőt pedig kirúgják a tévétől. Egy Putyinos wc papyrra díszített karácsonyfa alatt Mártondani Jézusnak öltözve fekszik, Szűz Máriát pedig Laci japán barátnője alakítja, aki japán altatókat énekel. Végül Flóráék pénisz alakú mézeskalácsot sütnek feketére és leviszik Évával az árva gyerekeknek.' },
  { year: '', text: 'Egy másik interjúnkat is kivágják a Petőfi tévéből, ebben Laci megpróbálja meggyőzni a Petőfi tv műsorvezetőjét, hogy 2Pac egy zenekar, a háttérben pedig a CSNK tagjai eljátszák, hogy smárolnak egymással. A műsorvezetőnő a pultnak vágja a mikrofont.' },
  { year: '', text: 'Laci a víziszínpados koncertünk előtt a vízbe mártja a csónakról a szintijét. Ezután a GarageBand applikációval hozza le a koncertet, a délutáni Borfalus eseményünkön pedig a Rokokó Rozé szintijét veszi el, hogy fel tudjon lépni.' },
  { year: '', text: 'Miki Rollins lesz új menedzserünk Pacsika Máté után. A beceneve Halál. Nem vicc. ' },
  { year: '', text: 'Ördög Nóra megosztja az Ördög Nóra című dalunkat, ami miatt a Blikk felhívja Mártondanit.' },
  { year: '', text: 'Első akváriumos koncertünk a kishallban a Kistehén előtt.' },
  { year: '', text: 'A titokos lemezbemutató bulink egy meleg bárban lenne, de a rendőrség lefújja, ezért a Corvin tetőn rendezzük meg a bulit, ahova fizetünk egy bohócot, aki annyira izgul, hogy nem mer kijönni a backstageből. Ez a férfi 50 éves, Miki Rollins leitatja, aztán pöcslufikat hajtogat mindenkinek, amit utólag tudunk meg, végül összehányja Bali dobját a bohóc.' },
  { year: '', text: 'Megjelenik a második lemezünk, a The Dark Side of the Moon.' },
  { year: 2017, text: '2017 augusztus 16 Megjelenik a Mindenki boldog című videoklipünk, amit az Index az első helyre rak, mint az év legjobb videoklipje. A negyedik legfelkapottabb videó a youtubeon.' },
  { year: '', text: 'Az Rtl Klub híradóban a Mindenki Boldogról beszél Erős Antónia.' },
  { year: '', text: 'Bejutunk az Index dalversenyére, és az év 5 legjobb dala közé kerül a Test fala. Nem mi neveztük a dalt, utólag tudtuk meg, hogy valaki beküldte. Fel kellett lépnünk a Kuplungba emiatt.' },
  { year: '', text: 'Palya Bea elénekli az Éndalomat az A38-on. ' },
  { year: '', text: 'Miki Rollins helyett új menedzserünk lesz. Rögtön kettő: Tetó és Zoé.' },
  { year: '', text: 'Április 25-én szereplünk a Comedy Cntral egyik promójában.' },
  { year: '', text: 'Május 22-én hajnali 3-kor fánkokkal és kávéval bekészítve várjuk a Twin Peaks harmadik évadának premierjét.' },
  { year: '', text: 'Frankó Roni külön ír nekünk ötvenedjére, hogy menjünk el az Artisjusba regisztrálni, mert sok pénzt lehet onnan kiszedni. 7 év után végül elmegyünk, de csak 2018-ban jelentjük le a dalokat.' },
  { year: '', text: 'Augusztus 20-án óriási menedzser vadászatba kezdünk, miután Tetó és Zoé ott hagyja a süllyedő hajót. Videókat kezdenek küldeni nekünk a menedzserek, de mi olyan emberek közül válogatunk, akik sosem csináltak még ilyet, pedig nagy nevek is megkeresnek minket.' },
  { year: '', text: 'Gírdalcover versenyt hirdetünk, ahova renegeteg Ricsárdgír feldolgozást küldenek az emberek.' },
  { year: '', text: 'A Bánkitó Fesztiválon megismerkedünk Tóth Dórival, aki aegy közért előtt a betonon guggol és a Halál;orgazmus koncerten hegedűl. Mártondani megkérdezi, ha ad neki belépőt, nem megy -e fellépni velük egy óra múlva.' },
  { year: '', text: 'Sarkadi Szabó Emese lesz az új menedzserünk, és megcsinálja a Ricsárdgír Spotifyt.' },
  { year: '', text: 'Megtartjuk az első Ricsárdgír karácsonyi vásárt az Aurórában, ahol rengeteg mörcsöt viszünk, és egy titkos koncerttel ünnepelünk. Kottakönyvek, pólók, VHS kazetták, matricák, Lemezek, koncertjegyek, kitűzők és egy teljesn új magnókazettát dobunk piacra.' },
  { year: 2018, text: 'Megjelenik a második EP-nk, a My horse is going to die :(' },
  { year: '', text: 'Megszületik a TheRicsards magazin, amire elő lehet fizetni, és két havonta jelenik meg.' },
  { year: '', text: 'Laci és Mártondani átveszi az A38 insagram fiókját, amiről egy menedzser előadáson kiderül, hogy hatalmas siker lesz. A fiúk azt találják ki, hogy a közönség irányíthatja szavazással a napjukat. Az A38 követőinek száma hihetetlenül megugrik, később ezt a marketing módszert megveszik többen is. Este kisorsoljuk hogy Gót estet tartunk egy szavazónak.' },
  { year: '', text: '2018 szeptemberében a Ricsárdgír elköszön Balitól egy olyan koncerten ahol végig nem árulták el ki esik ki a bandából. Lehetett itt is tippelni, végül Bali lett az. Bali 8 évet töltött a zenekarban dobosként.ez a koncertünk az Akvárium kishallban teltházas lett.' },
  { year: '', text: 'Tóth Dóri véglegesen beszáll a Ricsárdgírbe.' },
  { year: '', text: 'Hoffmanntamás Boldi grafikusunk kiszáll a Ricsárdgírből, helyét Deák Edina veszi át, ő lesz az új grafikus és arculatfelelős.' },
  { year: '', text: 'Augusztus 1-én megtartjuk az első Nemzetközi Ricsárdgír napot. Ezentúl minden évben ezen a napon nemzetközi Ricsárdgír nap lesz.' },
  { year: '', text: 'A Honfoglaló című műsorban az egyik kérdés az, hogy milyen néven ismerhetünk egy fiatal együttest? Ricsárdgír a válasz.' },
  { year: 2019, text: '2019 november 20 Megjelenik a SzintisLaci, és egy csapásra nemzetközi mém válik Laciból, több mint 8.000.000 megtekintéssel.' },
  { year: '', text: 'Barni lesz a roadunk.' },
  { img: './concerts/76.jpg' },
  { year: '', text: 'Váradi Márton lesz a menedzserünk, és a Mertez Kiadóhoz kerülünk.' },
  { year: '', text: 'Első önálló turnén is van.' },
  { year: '', text: 'Heatlie Dávid és Kun Bálint lesz a dobosunk.' },
  { year: '', text: 'Huszár Ákos lesz a Ricsárdgír zenekar dobosa.' },
  { year: '', text: 'Elindul a Ricsárdgír zenekar honlapja, ahol például olyan dolgokat is lehet rendelni, mint: Mártondani és SzintisLaci teniszedzések, privát házibulira lehet bérelni Gír tagot, stb.' },
  { year: '', text: 'Hatalmas sajtóbulit tartunk, ahova rengeteg újságírót és barátot hívunk el.' },
  { year: '', text: 'Az Aurórában az Utcáról Lakásba Egyesületnek pénzt gyűjtünk és egy ponton már magunkat árverezzük el, amit sok-sok pénzért meg is vesznek, így az egész zenekar elmegy egy lakásba és ott ad koncertet.' },
  { year: '', text: 'Megírjuk a Ricsárdgír film teljes forgatókönyvét, de nem kezdünk vele ezután soha semmit.' },
  { year: '', text: '2019 december 30 megjelenik a Smackleves című videoklipünk.' },
  { year: '', text: 'Megjelenik a Rise of the Koala című harmnadik lemezünk, ami nagyon sok helyen a toplisták élén áll.' },
  { year: 2020, text: '2020 március 16-án megjelenik a GírHírek első része.' },
  { year: '', text: 'Jön a Covid.' },
  { year: '', text: 'Új TheRicsardGirls jön létre Szénai Bogival és Szénai Rékával.' },
  { year: '', text: 'Elindul a webshopunk a popshopon.' },
  { year: '', text: 'Szerepelünk egy keresztrejtvényben a Füles magazinban: SzintisLaci polgári vezetékneve a kérdés.' },
  { year: '', text: 'Első teltházas Akváriumos nagyhallos koncertünk, ahol nincs előzenekar, csak mi.' },
  { year: '', text: 'SzintisLaci pólók és táskák érkeznek a webshopunkra.' },
  { year: '', text: 'Megjelenik a SzintisLaci megmenti a karácsonyt című mesekönyvünk, amit háromszor kell utángyártani, akkora érdeklődés fogadja, végül több kritikus is teljesen odaáig van érte.' },
  { year: 2021, text: 'Megismerkedünk a kanadai The Butthole Vampires zenekarral, akikkel egy klipet és egy dalt készítünk, mert nyertünk egy terézvárosi pályázaton. Kanadában a dal két hétig vezeti az alternatív kanadai lejátszási listát vagy mit.' },
  { year: '', text: 'A nemzetközi Ricsárdgír napra hatalmas pikniket szervezünk.' },
  { year: '', text: 'Az emberek megszavazzák, hogy a Fishing on Orfű második nagyszínpadának a neve FishingLaci legyen.' },
  { year: '', text: 'A klipszemlén nyer a SzintisLaci legjobb ötlet kategóriában.' },
  { year: '', text: 'Megtartjuk a 10 éves szülinapi koncertünket, ahova ismét eljön énekelni Edina, Eszter és Alma.' },
  { year: '', text: 'Megjelenik a Bible of the ArtFart duplalemez, amin 100db sosem hallott Ricsárdgír dal szerepel.' },
  { year: 2022, text: '2022 június 9-én megjelenik a Hülye vagy cíymű dalunk, amit nem klipnek szánunk, de klipnek hiszik az emberek. Ez a Zanox című film betétdala. Ezt a dalt jelölik a klipszemlén legjobb ötlet kategóriában, de mivel nincs benne ötletr, nem nyer. Mártondani viszont behúz egy díjat a Carson Coma klippel amit rendezett.' },
  { year: '', text: '2022 november 18 megjelenik a Szóljon a szar című dalhoz egy kis video, amit az emberek videoklipnek hisznek, pedig nem az.' },
  { year: '', text: 'Február 26-án megtartjuk a nagy esküvőt a hajón, ahol mindenki mindenkivel összeházasodik.' },
  { year: '', text: 'Fellépünk a Kossuth téren egy szolidaritáési koncerten a pedagógusokért.' },
  { year: '', text: 'Nyár végén összeülünk és bejelentjük egymás köüzött, hogy 2023 május 18-án, feloszlik a Ricsárdgír zenekar. Mártondani vázolja a terveket, és kitalálják hogy lőjék fel az űrbe Barnit, hogy amikor 1 évre rá visszatér, akkor jelentsék be. ' },
  { year: '', text: 'Elrepülünk Svájcba fellépni és megünnepelni hogy szavaztunk, aztán persze mindenki iszonyatosan depresszós let a végeredményt látva, de Svájc jó volt.' },
  { year: '', text: 'A Parkban véletlenül főzenekar leszünk.' },
  { year: '', text: '2022 szeptember 9-én bejelentjük a feloszlást.' },
  { year: '', text: 'Utolsó turnénkat is megtartjuk Győrben Szegeden és Pécsen.' },
  { year: 2023, text: 'Megjelenik az utolsó lemezünk a Kill the Koala, amiről nagyon jó kritikák születnek.' },
  { year: '', text: 'Aranylemezesek leszünk a Rise of the Koala miatt.' },
  { year: '', text: 'Az utolsó??? mörcsök megjelennek, pólók és táskák.' },
  { year: '', text: 'Fellépünk a Magyar Zene Házában.' },
  { year: '', text: 'Utolsó koncertünk Szentendrén. ez volt a 39. koncertünk itt.' },
  { year: '', text: 'Újra alakul a TheRicsardGirls Tóth Dórival, Borszukovszky Flórával, Deák Edinával, Papp Évával és Zsókával' },
  { year: '', text: 'A Recorder magazin címlapján vagyunk.' },
  { year: '', text: 'Május 18 - a Ricsárdgír feloszlik...' },
]

export const Timeline: React.FC = () => {
  const randomAnimation = Math.floor(Math.random() * animations.length);

  const renderStoryBlock = (block: {
    text?: string,
    img?: string,
    year?: string | number
  }) => {
    return (
      <div className={`mb-4 md:mb-0 flex flex-col border border-solid border-white overflow-hidden shadow-lg p-4 ${block.img && "bg-white"}`}
        data-aos={animations[randomAnimation]}
        data-aos-duration="1000"
      >
        <span className="font-black uppercase text-gir-500">{block.year}</span>
        <span>{block.text}</span>
        {block.img &&
          <img src={block.img} className="h-full w-full object-cover object-top" />
        }
      </div>
    )
  }

  return (
    <>
      <div className="w-full font-black text-gir-500 text-6xl flex justify-center">
        <span>"ez volt a ricsárdgír"</span>
      </div>
      <div className="relative p-4 m-auto max-w-7xl after:content after:absolute after:bg-white after:top-0 after:bottom-0 after:left-1/2 after:w-1">
        {movieStoryBlock.map((block, index) => {
          return (
            <div className="relative md:p-4 odd:left-0 even:left-[25%] md:even:left-[calc(50%+0.25rem)] w-3/4 z-10 md:z-0 md:w-1/2 bg-black md:bg-transparent after:absolute after:w-4 after:h-4 after:right-[-0.625rem] even:after:left-[-0.625rem] md:after:bg-white after:top-1/2 md:after:z-10 after:translate-y-[-50%] md:after:border after:border-solid after:border-black before:h-0 before:absolute before:top-1/2 before:w-0 before:z-10 before:border-8 before:border-solid before:border-white odd:before:right-0 odd:before:border-r-8 odd:before:border-transparent md:odd:before:border-l-white even:before:left-0 even:before:border-r-8 even:before:border-transparent md:even:before:border-r-white before:translate-y-[-50%]" key={index}>
              {block && renderStoryBlock(block)}
            </div>
          )
        })}
      </div>
      <div className="w-full mt-[10000px] p-4 font-black text-gir-500 text-6xl flex justify-center">
        <span>idáig kár volt legörgetni</span>
      </div>
      <div className="w-full mt-[10000px] p-4 font-black text-gir-500 text-6xl flex justify-center">
        <span>ide aztán meg végképp</span>
      </div>
    </>
  )
}

export default Timeline;
