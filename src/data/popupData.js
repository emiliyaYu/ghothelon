import iconMarkers from '../components/ui/IconMarkers';

const PopupData = {
  cities: {
    Nyaron: {
      label: 'Ньярон',
      position: [-31, 78],
      own: 'solariya',
      description:
        'Столицей Соларии и в частности края Тохуд является город Ньярон, ' +
        'который бал назван так в честь Ньяронской башни. Когда-то давно здесь состоялся Ньяронский совет, ' +
        'после чего в мире началось летоисчесление. Теперь на месте Ньяронской башни величественно стоит Ньяронский дворец, ' +
        'украшенный знаменитыми на весь мир огромными Птичьими вратами.',
      icon: iconMarkers.NyaronIcon,
      hide: false,
    },
    Yaryon: {
      label: 'Ярьон',
      position: [-10, 41],
      own: 'solariya',
      description:
        'Во время Великого Исхода племя Мараха, великого человека севера, обосновалось в этих землях. ' +
        'Однако через какое-то время он увёл большинство из своего племени, углубляясь все дальше, на север. ' +
        'Теперь эти земли входят в состав Соларии в качестве края дружбы (Тодофиндлона), столицей которого является Ярьон.',
      icon: iconMarkers.SolariyaLargeCities,
      hide: false,
    },
    Saardalas: {
      label: 'Саардалас',
      position: [-37, 47],
      own: 'solariya',
      description:
        'Столица Южных земель Соларии или края Нарцзар (Нарцзарлона), ' +
        'наместником которого является Кенарион Менэ, лучший кузнец после Кофауттара из числа холодных драконов.',
      icon: iconMarkers.SolariyaLargeCities,
      hide: false,
    },
    Menyor: {
      label: 'Меньор',
      position: [-41, 85],
      own: 'solariya',
      description:
        'Столица Солифортолона (Земель Солнечных Врат). Один из самых старых городов Соларии. ' +
        'Основан наместиком Солнечного края Адерном, третьим кханари и братом Их Божественных Величеств.',
      icon: iconMarkers.SolariyaLargeCities,
      hide: false,
    },
    Khanaryon: {
      label: 'Кханарьон',
      position: [-48.5, 96],
      own: 'solariya',
      description:
        'Первое поселение, основанное на континенте. Во время Великого Исхода сюда прилетели драконы со своей родины - Солнечного острова. ' +
        'После - долгое время Адерн Солифортонон оставался здесь, чтобы держать связть с уноходари, ушедшими на острова Ирлот.',
      icon: iconMarkers.SolariyaSmallCities,
      hide: false,
    },
    Benyor: {
      label: 'Беньор',
      position: [-21, 70],
      own: 'solariya',
      description:
        'Беньор - город-храм, главный храм Солнца, бога Игноса, где несут свою службу царица Эйруин и её сотня гарпий.',
      icon: iconMarkers.BenyorIcon,
      hide: false,
    },
    Phantazm: {
      label: 'Фантазм',
      position: [-13, 97],
      own: 'solariya',
      description:
        'У подножия гор Призрачных скрывается город Фантазм, в котором находится большая тюрьма для провинившихся и нарувшивших общий порядок и законы Соларии.',
      icon: iconMarkers.SolariyaSmallCities,
      hide: false,
    },
    Farbru: {
      label: 'Фарбру',
      position: [7, 55],
      own: 'solariya',
      description:
        'Один из городов, где когда-то обосновалось племя Мараха, открывателя северных земель.',
      icon: iconMarkers.SolariyaSmallCities,
      hide: false,
    },
    'El-Berun': {
      label: 'Эль-Берун',
      position: [14, 45],
      own: 'solariya',
      description: 'Город-порт, главная торговая точка на пути в Ма-Раах.',
      icon: iconMarkers.SolariyaPorts,
      hide: false,
    },
    Aulhunyor: {
      label: 'Аулхуньор',
      position: [-56, 117],
      own: 'solariya',
      description:
        'Аулхуньор - первый город, основанный драконами на солнечном острове.',
      icon: iconMarkers.SolariyaSmallCities,
      hide: false,
    },
    'El-Thimiun': {
      label: 'Эль-Тимиун',
      position: [-53.8, 89],
      own: 'solariya',
      description:
        'Один из первых южных портов Соларии, основанный Адерном Солифортононом, ' +
        'предназначенный для связи с архипелагом Ирлот. ' +
        'Входит в состав края Солифорото.',
      icon: iconMarkers.SolariyaPorts,
      hide: false,
    },
    'El-Bernus': {
      label: 'Эль-Бернус',
      position: [-51, 57],
      own: 'solariya',
      description:
        'Южный порт Соларии, предназначенный для связи с архипелагом Ирлот. Входит в состав края Нарцзар.',
      icon: iconMarkers.SolariyaPorts,
      hide: false,
    },
    'El-Khun': {
      label: 'Эль-Кхун',
      position: [-52, 43.8],
      own: 'solariya',
      description:
        'Южный порт Соларии, предназначенный для связи с архипелагом Ирлот. Входит в состав края Нарцзар.',
      icon: iconMarkers.SolariyaPorts,
      hide: false,
    },
    Irloth: {
      label: 'Ирлот',
      position: [-56, 63],
      own: 'solariya',
      description:
        'Ирлот - основное поселение уноходари, тех драконов, кто не принял решение повелителей Соларии о передаче огня первым людям.',
      icon: iconMarkers.SolariyaLargeCities,
      hide: false,
    },
    'El-Unohod': {
      label: 'Эль-Уноход',
      position: [-54.5, 49],
      own: 'solariya',
      description:
        'Эль-Уноход - город-порт, находящийся на втором крупном острове Ирлотского архипелага, ' +
        'там проживают уноходари, которые часто посещают материк. ' +
        'Там живет и Аулин Кофаут, дочь Кофауттара, бывшая первой гарпией царицы Эйруин.',
      icon: iconMarkers.SolariyaPorts,
      hide: false,
    },
    'Thel-Izra': {
      label: 'Тель-Изра',
      position: [0.5, 3],
      own: 'arona',
      description:
        'Тель-Изра - столица людского государства, основанная Адартом Златовласым.',
      icon: iconMarkers.AronaLargeCastleIcon,
      hide: false,
    },
    'Tel-Yaff': {
      label: 'Тель-Яфф',
      position: [-22, -11.5],
      own: 'arona',
      description:
        'Тель-Яфф расположен у южной части хребта Цзардалар и окружен мощными стенами. ' +
        'Один из королей Арона воздвиг их, чтобы защищать королевство от набегов воинственных Фанхар.',
      icon: iconMarkers.AronaSmallCastleIcon,
      hide: false,
    },
    'Bel-Mina': {
      label: 'Бель-Мина',
      position: [-13.5, -4],
      own: 'arona',
      description:
        'Бель-Мина примечателен тем, что здесь находится единственный в Арона храм Солнца. Арона - не ярые поклонники бога Игноса.',
      icon: iconMarkers.AronaSmallCastleIcon,
      hide: false,
    },
    'Tel-Raff': {
      label: 'Тель-Рафф',
      position: [8.6, -8.7],
      own: 'arona',
      description:
        'Город был основан рыцарем Арье Тафраффом, чей мятеж Огненных мечей прогремел на весь континент. ' +
        'После того, как король Арона успешно подавил восстание, город полностью пришел в упадок. ' +
        'В королевстве эти земли не любят, а живущих там осталось мало - в основном те, кто помнит о восстании Арье, истории о котором переходят там из уст в уста.',
      icon: iconMarkers.AronaSmallCastleIcon,
      hide: false,
    },
    'Esh-Yar': {
      label: 'Эш-Яр',
      position: [9, 9.3],
      own: 'arona',
      description:
        'Через этот город проходит множество торговцев, направляясь во все стороны света. ' +
        'Однако на севере проживают дикие гарпии, а чуть западнее находятся гиблые болотистые земли, ' +
        'обуянные ядовитым смрадом, чей феномен ещё не до конца изучен и чья гниль поражает случайно забредших туда. ' +
        'Поэтому Эш-Яр и близлежащие от него территории тщательно охраняются. ',
      icon: iconMarkers.AronaSmallCastleIcon,
      hide: false,
    },
    'Bel-Sheiv': {
      label: 'Бель-Шейв',
      position: [18, -5],
      own: 'arona',
      description:
        'Бель-Шейв находится глубоко в лесах и найти его не так-то просто: ' +
        'люди там предпочитают не вырубать леса, так как влияние гарпий доходит даже до сюда.',
      icon: iconMarkers.AronaSmallCastleIcon,
      hide: false,
    },
    "Adir'rabad": {
      label: "Адир'рабад",
      position: [-34, -39.5],
      own: 'har',
      description:
        "Адир'рабад - последний жизннный оплот, расположившийся перед Убогими землями. " +
        'Далее, на юге распростёрлась Красная пустыня, чей песок слишком горяч, чтобы жить там.',
      icon: iconMarkers.NarimiyaCitiesIcon,
      hide: false,
    },
    Malighazdar: {
      label: 'Малигхасдар',
      position: [-22, -53.5],
      own: 'har',
      description:
        'Малигхасдар считается второй столицей Наримии. ' +
        'Крал Сефу из династии Сеттигидов любил прибрежные пески близ Дикого архипелага, ' +
        'поэтому из-за частых поездок основал там свою резеденцию, которая вскоре перевратилась в большой город, ' +
        'угодный правителям Наримии. Так же город называют колыбелью кралов. ',
      icon: iconMarkers.NarimiyaCitiesIcon,
      hide: false,
    },
    Fledsilhsain: {
      label: 'Фледсильхсаин',
      position: [-14.5, -49.5],
      own: 'har',
      description:
        'Фледсильхсаин - столица Наримии, основанная советом Четырех. ' +
        'Один из самых больших городов в мире, по красоте который может потягаться даже со столицей мира - Няроном.',
      icon: iconMarkers.FledsilhsainIcon,
      hide: false,
    },
    'Sha-Khen': {
      label: 'Ша-Кен',
      position: [-3.5, -49],
      own: 'har',
      description:
        'Известен тем, что собирает в себя всех преступиников в Наримии, из-за находящейся в городе тюрьмы.',
      icon: iconMarkers.NarimiyaCitiesIcon,
      hide: false,
    },
    Vaina: {
      label: 'Вайна',
      position: [31.3, -48.5],
      own: 'banuk',
      description:
        'Столичное и самое крупное население немногочисленных Банук.',
      icon: iconMarkers.VainaIcon,
      hide: false,
    },
    Fiahta: {
      label: 'Фиахта',
      position: [20, -48.5],
      own: 'banuk',
      description:
        'Фиахта - второе главное поселение Банук. Там живут воины, которые защищают народ степных деревьев от набегов хунхаров.',
      icon: iconMarkers.VainaIcon,
      hide: false,
    },
    Nasor: {
      label: 'Насор',
      position: [39.6, -38.5],
      own: 'banuk',
      description:
        'Насор - город, построенный после заключения Дайдулинского соглашения, ' +
        "по которому Ма-Раах переходит частичное обладание водами залива Рон'По. " +
        'Главное сосредоточение сил в годы первой войны, а после нее почти разрушенный до основания город, ' +
        'который Банук восстановили, и теперь там живут жрецы, почитающие духа вод реки Дайдулин.',
      icon: iconMarkers.VainaIcon,
      hide: false,
    },
    Halar: {
      label: 'Халар',
      position: [43, -26.1],
      own: 'maRaath',
      description:
        "Бывшее название города - Мер'зис. Мер'зис был послением, основаным доблестным воином Халаром, " +
        'бежавшим из Банук в разгар первой войны на континенте. ' +
        'В годы войны здесь произошла Халарская резня, в ходе которой скончались многие последователи Халара, включая его самого. ' +
        'Ма-Раах не забыли его деяний, и с тех пор город носит название героя, не позабывшего о своей чести.',
      icon: iconMarkers.MaRaathSmallCities,
      hide: false,
    },
    "Maa'drull": {
      label: "Маа'друлл",
      position: [46, -13],
      own: 'maRaath',
      description:
        "Маа'друлл - один из первых городов, основанных в землях, которые открытыл первый король Ма-Раах, Боруг.",
      icon: iconMarkers.MaRaathSmallCities,
      hide: false,
    },
    "Adir'drull": {
      label: "Адир'друлл",
      position: [46.7, 2.6],
      own: 'maRaath',
      description:
        "Адир'друлл - столица всего северного королевства. Именно здесь во время Великого Исхода Марах, великий северянин, " +
        'объявил об окончании своего похода и основании королевства.',
      icon: iconMarkers.MaRaathLargeCities,
      hide: false,
    },
    "Wind'drull": {
      label: "Винд'друлл",
      position: [47.1, 19.4],
      own: 'maRaath',
      description:
        "Винд'друлл - второй по численности населения город в Ма-Раах. Основан первым королем Боругом.",
      icon: iconMarkers.MaRaathLargeCities,
      hide: false,
    },
    Harstad: {
      label: 'Харстад',
      position: [53.5, 25],
      own: 'maRaath',
      description:
        'Ма-раахский порт. Основан королем Бьорном, ' +
        'мечтавшим всю свою жизнь начать покорять морские просторы и скрывавшиеся в них новые земли, ' +
        'однако рано умер, успев передать свою мечту маленькому сыну, юному королю Мерину.',
      icon: iconMarkers.MaRaathPorts,
      hide: false,
    },
    Anhelm: {
      label: 'Анхельм',
      position: [42.6, 32.8],
      own: 'maRaath',
      description: 'Одно из поселений Ма-Раах, стоящее у реки Хариэльвен.',
      icon: iconMarkers.MaRaathSmallCities,
      hide: false,
    },
    Thenber: {
      label: 'Тенбер',
      position: [41, 51],
      own: 'maRaath',
      description: 'Самое восточное северное поселение.',
      icon: iconMarkers.MaRaathSmallCities,
      hide: false,
    },
    Gaumyor: {
      label: 'Гаумьор',
      position: [30, 51],
      own: 'maRaath',
      description:
        'Город-порт Гаумьор был основан королем Харальдом, сыном первого короля Ма-Раах. ' +
        'Харальд, желая продемонстрировать великим драконам, держателям дара огня, знания своего народа на Ньяронском совете, ' +
        'построил первый порт и отплыл из него в Соларию на первом в мире корабле. ' +
        'Корабль носил имя его дочери Эйлы. Сейчас Гаумьор является основной торговой точкой с Соларией на территории северного королевства.',
      icon: iconMarkers.MaRaathPorts,
      hide: false,
    },
  },
  countries: {
    Solaria: {
      label: 'Солария',
      position: [-27, 56],
      own: 'solariya',
      description:
        'Солария - дом драконов, территория материка, на которую прилетели драконы во время Великого Исхода, ' +
        'основав здесь свое государство.',
      icon: iconMarkers.DragonMarker,
      hide: true,
    },
    Narimiya: {
      label: 'Наримия',
      position: [-15, -38],
      own: 'har',
      description:
        'Наримия - государство, вышедшее из племени первых людей, которых возглавлял в своем походе Нарим, отправившись на запад, к горам Цзардалар.',
      icon: iconMarkers.NarimiyaIcon,
      hide: true,
    },
    'Ma-Raath': {
      label: 'Ма-Раах',
      position: [40, -5],
      own: 'maRaath',
      description:
        'Ma-Раах - великое государство севера, основанное Марахом, великим первооткрывателем. ' +
        'Ма-Раах очень дружны с драконами, поэтому они образуют с Соларией многовековой военный, политический и торговый союз. ' +
        'Короли Ма-Раах обрели славу первооткрывателей: король Мерин открыл Летающие острова (Меринге), ' +
        'его дочь, Эйра Великая, нанесла на мировую карту Туманные острова.',
      icon: iconMarkers.MaRaathIcon,
      hide: true,
    },
    Banuk: {
      label: 'Банук',
      position: [35, -45.5],
      own: 'banuk',
      description:
        'Банук вышли из пелемени первых людей, чей предводитель остался неизвестным. ' +
        'Они, обосновавшись на северо-западе, предпочли вести отстранённый образ жизни, ' +
        'в отличие от всех остальных развитых государств, вышедших из племен первых людей. ' +
        'Однако позже Банук развязали первую войну на континенте, столвнувшись в проитовостоянии с Ма-Раах, за что были наказаны драконами.',
      icon: iconMarkers.BanukIcon,
      hide: true,
    },
    Arona: {
      label: 'Арона',
      position: [-2, -10],
      own: 'arona',
      description:
        'Арона - государство людей, вышедшее из племени Адарта. ' +
        'Адарт, отказавшись от драконьего дара в виде огня, отошел на запад за горы Лихтфер, ' +
        'основав там страну "свободных людей". ' +
        'Однако, не получив огня, люди Арона обрекли себя на быстротечность собственного существования' +
        ' - их средняя продолжительность жизни состовляет около 60 лет.',
      icon: iconMarkers.AronaIcon,
      hide: true,
    },
    Yuanhars: {
      label: 'Юэнхар',
      position: [-28, 5],
      own: 'har',
      description:
        'Одно из диких разрозненных племён Фанхар, которые, отделившись от Хар, не получили огня. ' +
        'Юэнхар более прогрессивны своих южных соседей, однако менее воинственны.',
      icon: iconMarkers.YuanharsIcon,
      hide: true,
    },
    Mavanhars: {
      label: 'Маванхар',
      position: [-46.5, -19],
      own: 'har',
      description:
        'Одно из диких разрозненных племён Фанхар, которые, отделившись от Хар, не получили огня. ' +
        'Маванхар, располагаясь в бассейне братских рек, обладает воинственным духом и живет засчет постоянных набегов на своих северных соседей - Юэнхар.',
      icon: iconMarkers.MavanharsIcon,
      hide: true,
    },
    Hunhar: {
      label: 'Хунхар',
      position: [10, -54],
      own: 'har',
      description:
        'Хунхары - племя, которое когда-то отделилось от племени Нарима и отправилось на север разведывать территории, ' +
        'но так и не вернулась обратно. Теперь Хунхар образуют самостоятельное государственное образование ' +
        'и даже совершают набеги на своих соседей - Банук и Наримию. Видимо, большинству из пелемени Хар присуща воинственность духа.',
      icon: iconMarkers.HunharsIcon,
      hide: true,
    },
  },
  seas: {
    OdarrhuuOcean: {
      label: 'Океан Одаррхуу',
      position: [-50, -100],
      own: 'noMansLand',
      description: 'Океан, омывающий материк с юго-запада.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    ElyegnosOcean: {
      label: 'Океан Эльейгнос',
      position: [50, 80],
      own: 'noMansLand',
      description: 'Океан, омывающий материк с северо-востока.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    BlueSea: {
      label: 'Синее море',
      position: [4, 38],
      own: 'solariya',
      description: 'Синее море',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HaraldSea: {
      label: 'Море Харальда',
      position: [26, 28],
      own: 'maRaath',
      description:
        'Названо так, в честь короля Ма-Раах Харальда, который проплыл по морю первым.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    EvksinSea: {
      label: 'Эвксинское море',
      position: [-44, -30],
      own: 'noMansLand',
      description: 'Эвксинское море',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    WildSea: {
      label: 'Дикое море',
      position: [-44, -55],
      own: 'har',
      description:
        'Дикое море полно всяких разных хищных тварей, которые скрываются глубоко в его глубинах.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    SmokeSea: {
      label: 'Дымное море',
      position: [40, -55],
      own: 'maRaath',
      description: 'Дымное море',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    SunStrait: {
      label: 'Солнечный пролив',
      position: [-54.6, 105],
      own: 'solariya',
      description: 'Солнечный пролив',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    IranshherBay: {
      label: 'Залив Ираншхер',
      position: [-44, 15],
      own: 'solariya',
      description: 'Залив Ираншхер',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    SolberhRiver: {
      label: 'Река Солберх',
      position: [-47, 100],
      own: 'solariya',
      description: 'Река Солберх',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    KhunberhRiver: {
      label: 'Река Кхунберх',
      position: [-40, 70],
      own: 'solariya',
      description:
        'Третья по велечине река в мире и самая большая река дома драконов.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    KhiringulRiver: {
      label: 'Река Кхирингул',
      position: [-8, 70],
      own: 'solariya',
      description: 'Вторая по велечине река в Соларии.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    TohgulRiver: {
      label: 'Река Тохгул',
      position: [-8, 26],
      own: 'solariya',
      description: 'Река Тохгул',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    MalaghulRiver: {
      label: 'Река Малагхул',
      position: [-45, 34],
      own: 'solariya',
      description:
        'Река Малагхул входит в Первый Бассейн Братских рек и является главной из них. Названа в честь первого кханари Малатара.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    CzilighulRiver: {
      label: 'Река Цзилигхул',
      position: [-50, 25],
      own: 'solariya',
      description:
        'Входит в первый Бассейн Братских рек и является из них самой маленькой и спокойной по течению. Названа в честь кханари Цзецзилии.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    AghulRiver: {
      label: 'Река Aгхул',
      position: [-50, 31],
      own: 'solariya',
      description:
        'Входит в первый Бассейн Братских рек. Названа в честь кханари и хранителя края Солифорто Адерна.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    InlandSea: {
      label: 'Внутреннее море',
      position: [-22, 13.4],
      own: 'har',
      description: 'Самое больше озеро на континенте.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    BasinFraternalRivers: {
      label: 'Второй Бассейн Братских рек',
      position: [-52, -16],
      own: 'har',
      description: 'Второй Бассейн Братских рек',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HunRiver: {
      label: 'Река Хун',
      position: [-6, -53],
      own: 'har',
      description: 'Река Хун',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    DaidulinRiver: {
      label: 'Река Дайдулин',
      position: [36.5, -38],
      own: 'banuk',
      description:
        'Во время первой войны Банук справляли свои военные корабли по этой реке. ' +
        'После сокрушительного поражения эта река находится под защитой жрецов Высоких степей, ' +
        'по словам которых там теперь обитает дух, хранящий эти воды от злых помыслов.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    MirekRiver: {
      label: 'Река Мирек',
      position: [27, -46],
      own: 'banuk',
      description: 'Самая большая река, проходящая через земли Банук.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    VeleborRiver: {
      label: 'Река Велебор',
      position: [37, -41],
      own: 'banuk',
      description: 'Река Велебор',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HildelvenRiver: {
      label: 'Река Хилдэльвен',
      position: [42, -33],
      own: 'maRaath',
      description: 'Река Хилдэльвен',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HardеlvenRiver: {
      label: 'Река Хардэльвен',
      position: [40, -29],
      own: 'maRaath',
      description: 'Река Хардэльвен',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    KelLake: {
      label: 'Озеро Кель',
      position: [42.5, -29],
      own: 'maRaath',
      description: 'Озеро Кель',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    BerhtelvenRiver: {
      label: 'Река Берхтэльвен',
      position: [45, -4],
      own: 'maRaath',
      description: 'Река Берхтэльвен',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    GerelvenRiver: {
      label: 'Река Герэльвен',
      position: [47.6, 0.4],
      own: 'maRaath',
      description: 'Река Герэльвен',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HarielvenRiver: {
      label: 'Река Хариэльвен',
      position: [37, 40],
      own: 'maRaath',
      description:
        'Река Хариэльвен является самой крупной рекой на континенте.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    MundRiver: {
      label: 'Река Мунд',
      position: [37, 53],
      own: 'maRaath',
      description: 'Входит в треитий Бассейн Братских рек.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HenRiver: {
      label: 'Река Хен',
      position: [35, 55],
      own: 'maRaath',
      description: 'Входит в треитий Бассейн Братских рек.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HrotRiver: {
      label: 'Река Хрот',
      position: [33, 55],
      own: 'maRaath',
      description: 'Входит в треитий Бассейн Братских рек.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    deadSwamps: {
      label: 'Гиблые болота',
      position: [16, 25],
      own: 'noMansLand',
      description:
        'Cамое странное место. ' +
        'Там находятся не только болота, в которых легко увязнуть, но и еще витает ядовитый смрад, знаменитый своей смертоносностью. ' +
        'В этих землях никто не живет.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    RonpoBay: {
      label: "Залив Рон'По",
      position: [38.5, -30],
      own: 'maRaath',
      description:
        'Залив, обладание которым стало предлогом к началу первой войны на континенте. ' +
        'По итогам противостояния между Банук и Ма-Раах залив отошел последним на правах победителя.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    HlaanStrait: {
      label: 'Пролив Хлаан',
      position: [-50.6, 70],
      own: 'solariya',
      description:
        'Пролив, проходящий через материк и архипелаг Ирлот. Является важным для Соларии из-за поддержания связи со своими родичами.',
      icon: iconMarkers.SeasIcon,
      hide: false,
    },
    Viht: {
      label: 'Вихты',
      position: [-62, 28],
      own: 'solariya',
      description:
        'Вихты - морские чудовища, которые повинуются драконам и охраняют залежи глубоководного меситэва. ' +
        'Из рода Арона в свое время тоже выходили великие мореплаватели. Один из них - Янгусс Великий Крюк, ' +
        ' чей корабль в ходе своего последнего плавания наткнутлся на вихта и утонул. ' +
        'Мало, кто встречался с вихтами вживую, и пока о них в легендах и сказках гудит весь материк, драконы не спешат раскрывать тайну об этих чудовищах.',
      icon: iconMarkers.VihtIcon,
      hide: false,
    },
  },
  mountains: {
    GhostMountains: {
      label: 'Призрачные горы',
      position: [-15, 117],
      own: 'solariya',
      description: 'Призрачные горы',
      icon: iconMarkers.MountainsIcon,
      hide: false,
    },
    LihtferMountains: {
      label: 'Горы Лихтфер',
      position: [-30, 30],
      own: 'solariya',
      description: 'Горы Лихтфер',
      icon: iconMarkers.MountainsIcon,
      hide: false,
    },
    ZcardalarMountains: {
      label: 'Горы Цзардалар',
      position: [-10, -25],
      own: 'har',
      description: 'Горы Цзардалар',
      icon: iconMarkers.MountainsIcon,
      hide: false,
    },
    HarpiesMountains: {
      label: 'Горы Гарпий',
      position: [37, 5],
      own: 'maRaath',
      description:
        'В первые дни мира через эти горы перешел великий северянин Марах, ведя за собой свое племя. ' +
        'Но теперь это место обитание гарпий (или змеи-птиц), численность которых растет с каждым днем.',
      icon: iconMarkers.MountainsIcon,
      hide: false,
    },
    HighSteppes: {
      label: 'Высокие степи',
      position: [27, -33],
      own: 'banuk',
      description:
        'В Банук нет гор, есть только холмы, покрытые густыми лесами.',
      icon: iconMarkers.MountainsIcon,
      hide: false,
    },
    redDesert: {
      label: 'Красная пустыня',
      position: [-48, -43],
      own: 'noMansLand',
      description:
        'Красная пустыня или Убогие земли - место, полностью безжизненное из-за сильно палящего солнца. ' +
        'Когда-то давно Нарим, основательно Наримского государства, отправил на север и юг группы наримцев из своего племени, ' +
        'чтобы разведать близлежащие территории около гор Цзардалар. Та часть, что ушла на север, отделилась и основала свое государство хунхаров, ' +
        'а те, что ушли на юг, так и не вернулись и больше не выходили на связь.',
      icon: iconMarkers.RedDesertIcon,
      hide: false,
    },
  },
};

export default PopupData;
