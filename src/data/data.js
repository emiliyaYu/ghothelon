import iconMarkers from "../components/ui/IconMarkers";

const Data = {
    cities: {
        'Nyaron' : {
            label: 'Ньярон',
            position: [-31, 78],
            iconType: 'city',
            description: 'Столицей Соларии и в частности края Тохуд является город Ньярон, ' +
                'который бал назван так в честь Ньяронской башни. Когда-то давно здесь состоялся Ньяронский совет, ' +
                'после чего в мире началось летоисчесление. Теперь на месте Ньяронской башни величественно стоит Ньяронский дворец, ' +
                'украшенный знаменитыми на весь мир огромными Птичьими вратами.',
            icon: iconMarkers.NyaronIcon,
            hide: false
        },
        'Yaryon': {
            label: 'Ярьон',
            position: [-10, 41],
            iconType: 'city',
            description: 'Во время Великого Исхода племя Мараха, великого человека севера, обосновалось в этих землях. ' +
                'Однако через какое-то время он увёл большинство из своего племени, углубляясь все дальше, на север. ' +
                'Теперь эти земли входят в состав Соларии в качестве края дружбы (Тодофиндлона), столицей которого является Ярьон.',
            icon: iconMarkers.SolariyaLargeCities,
            hide: false
        },
        'Saardalas': {
            label: 'Саардалас',
            position: [-37, 47],
            iconType: 'city',
            description: 'Столица Южных земель Соларии или края Нарцзар (Нарцзарлона), ' +
                'наместником которого является Кенарион Менэ, лучший кузнец после Кофауттара из числа холодных драконов.',
            icon: iconMarkers.SolariyaLargeCities,
            hide: false
        },
        'Menyor': {
            label: 'Меньор',
            position: [-41, 85],
            iconType: 'city',
            description: 'Столица Солифортолона (Земель Солнечных Врат). Один из самых старых городов Соларии. ' +
                'Основан наместиком Солнечного края Адерном, третьим кханари и братом Их Божественных величеств.',
            icon: iconMarkers.SolariyaLargeCities,
            hide: false
        },
        'Benyor': {
            label: 'Беньор',
            position: [-21, 70],
            iconType: 'city',
            description: 'Беньор - город-храм, главный храм Солнца, бога Игноса, где несут свою службу царица Эйруин и её сотня гарпий.',
            icon: iconMarkers.BenyorIcon,
            hide: false
        },
        'Phantazm': {
            label: 'Фантазм',
            position: [-13, 97],
            iconType: 'city',
            description: 'У подножия гор Призрачных скрывается город Фантазм, в котором находится большая тюрьма для провинившихся и нарувшивших общий порядок и законы Соларии.',
            icon: iconMarkers.SolariyaSmallCities,
            hide: false
        },
        'Farbru': {
            label: 'Фарбру',
            position: [7, 55],
            iconType: 'city',
            description: 'Один из городов, где когда-то обосновалось племя Мараха, открывателя северных земель.',
            icon: iconMarkers.SolariyaSmallCities,
            hide: false
        },
        'El-Berun': {
            label: 'Эль-Берун',
            position: [14, 45],
            iconType: 'city',
            description: 'Город-порт, главная торговая точка на пути в Ма-Раах.',
            icon: iconMarkers.SolariyaPorts,
            hide: false
        },
        'Aulhunyor': {
            label: 'Аулхуньор',
            position: [-56, 117],
            iconType: 'city',
            description: 'Аулхуньор - первый город, основанный драконами на солнечном острове.' +
                '',
            icon: iconMarkers.SolariyaSmallCities,
            hide: false
        },
        'El-Thimiun': {
            label: 'Эль-Тимиун',
            position: [-53.8, 89],
            iconType: 'port',
            description: 'Один из первых южных портов Соларии, основанный Адерном Солифортононом, ' +
                'предназначенный для связи с архипелагом Ирлот. ' +
                'Входит в состав края Солифорото.' +
                '',
            icon: iconMarkers.SolariyaPorts,
            hide: false
        },
        'El-Bernus': {
            label: 'Эль-Бернус',
            position: [-51, 57],
            iconType: 'port',
            description: 'Южный порт Соларии, предназначенный для связи с архипелагом Ирлот. Входит в состав края Нарцзар.' +
                '',
            icon: iconMarkers.SolariyaPorts,
            hide: false
        },
        'El-Khun': {
            label: 'Эль-Кхун',
            position: [-52, 43.8],
            iconType: 'port',
            description: 'Южный порт Соларии, предназначенный для связи с архипелагом Ирлот. Входит в состав края Нарцзар.' +
                '',
            icon: iconMarkers.SolariyaPorts,
            hide: false
        },
        "Thel-Izra": {
            label: 'Тель-Изра',
            position: [-2, 5],
            iconType: 'city',
            description: 'Тель-Изра - столица людского государства, основанная Адартом Златовласым.',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Tel-Yaff': {
            label: 'Тель-Яфф',
            position: [-22, -11.5],
            iconType: 'city',
            description: 'Тель-Яфф расположен у южной части хребта Цзардалар и окружен мощными стенами. ' +
                'Один из королей Арона воздвиг их, чтобы защищать королевство от набегов воинственных Фанхар.',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Bel-Mina': {
            label: 'Бель-Мина',
            position: [-13.5, -4],
            iconType: 'city',
            description: 'Бель-Мина примечателен тем, что здесь находится единственный в Арона храм Солнца. Арона - не ярые поклонники бога Игноса.',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Tel-Raff': {
            label: 'Тель-Рафф',
            position: [8.6, -8.7],
            iconType: 'city',
            description: 'Город был основан рыцарем Арье Тафраффом, чей мятеж Огненных мечей прогремел на весь континент. ' +
                'После того, как король Арона успешно подавил восстание, город полностью пришел в упадок. ' +
                'В королевстве эти земли не любят, а живущих там осталось мало - в основном те, кто помнит о восстании Арье, истории о котором переходят там из уст в уста.',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Esh-Yar': {
            label: 'Эш-Яр',
            position: [9, 9.3],
            iconType: 'city',
            description: 'Через этот город проходит множество торговцев, направляясь во все стороны света. ' +
                'Однако на севере проживают дикие гарпии, а чуть западнее находятся гиблые болотистые земли, ' +
                'обуянные ядовитым смрадом, чей феномен ещё не до конца изучен и чья гниль поражает случайно забредших туда. ' +
                'Поэтому Эш-Яр и близлежащие от него территории тщательно охраняются. ',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Bel-Sheiv': {
            label: 'Бель-Шейв',
            position: [18, -5],
            iconType: 'city',
            description: 'Бель-Шейв находится глубоко в лесах и найти его не так-то просто: ' +
                'люди там предпочитают не вырубать леса, так как влияние гарпий доходит даже до сюда.',
            icon: iconMarkers.CitiesMarker,
            hide: false
        },
        'Adir\'rabad': {
            label: 'Адир\'рабад',
            position: [-34, -39.5],
            iconType: 'city',
            description: 'Адир\'рабад - последний жизннный оплот, расположившийся перед Убогими землями. ' +
                'Далее, на юге распростёрлась Красная пустыня, чей песок слишком горяч, чтобы жить там.',
            icon: iconMarkers.NarimiyaCitiesIcon,
            hide: false
        },
        'Malighazdar': {
            label: 'Малигхасдар',
            position: [-22, -53.5],
            iconType: 'city',
            description: 'Малигхасдар считается второй столицей Наримии. ' +
                'Крал Сефу из династии Сеттигидов любил прибрежные пески близ Дикого архипелага, ' +
                'поэтому из-за частых поездок основал там свою резеденцию, которая вскоре перевратилась в большой город, ' +
                'угодный правителям Наримии. Так же город называют колыбелью кралов. ',
            icon: iconMarkers.NarimiyaCitiesIcon,
            hide: false
        },
        'Fledsilhsain': {
            label: 'Фледсильхсаин',
            position: [-14.5, -49.5],
            iconType: 'city',
            description: 'Фледсильхсаин - столица Наримии, основанная советом Четырех. ' +
                'Один из самых больших городов в мире, по красоте который может потягаться даже со столицей мира - Няроном.',
            icon: iconMarkers.FledsilhsainIcon,
            hide: false
        },
        'Sha-Khen': {
            label: 'Ша-Кен',
            position: [-3.5, -49],
            iconType: 'city',
            description: 'Известен тем, что собирает в себя всех преступиников в Наримии, из-за находящейся в городе тюрьмы.',
            icon: iconMarkers.NarimiyaCitiesIcon,
            hide: false
        },
        'Vaina': {
            label: 'Вайна',
            position: [31.3, -48.5],
            iconType: 'city',
            description: 'Столичное и самое крупное население немногочисленных Банук.',
            icon: iconMarkers.VainaIcon,
            hide: false
        },
        'Halar': {
            label: 'Халар',
            position: [43, -26.1],
            iconType: 'city',
            description: 'Бывшее название города - Мер\'зис. Мер\'зис был послением, основаным доблестным воином Халаром, ' +
                'бежавшим из Банук в разгар первой войны на континенте. ' +
                'В годы войны здесь произошла Халарская резня, в ходе которой скончались многие последователи Халара, включая его самого. ' +
                'Ма-Раах не забыли его деяний, и с тех пор город носит название героя, не позабывшего о своей чести.',
            icon: iconMarkers.MaRaathSmallCities,
            hide: false
        },
        'Maa\'drull': {
            label: 'Маа\'друлл',
            position: [46, -13],
            iconType: 'city',
            description: 'Маа\'друлл - один из первых городов, основанных в землях, которые открытыл первый король Ма-Раах, Боруг.',
            icon: iconMarkers.MaRaathSmallCities,
            hide: false
        },
        'Adir\'drull': {
            label: 'Адир\'друлл',
            position: [46.7, 2.6],
            iconType: 'city',
            description: 'Адир\'друлл - столица всего северного королевства. Именно здесь во время Великого Исхода Марах, великий северянин, ' +
                'объявил об окончании своего похода и основании королевства.',
            icon: iconMarkers.MaRaathLargeCities,
            hide: false
        },
        'Wind\'drull': {
            label: 'Винд\'друлл',
            position: [47.10, 19.4],
            iconType: 'city',
            description: 'Винд\'друлл - второй по численности населения город в Ма-Раах. Основан первым королем Боругом.',
            icon: iconMarkers.MaRaathLargeCities,
            hide: false
        },
        'Harstad': {
            label: 'Харстад',
            position: [53.5, 25],
            iconType: 'city',
            description: 'Ма-раахский порт. Основан королем Бьорном, ' +
                'мечтавшим всю свою жизнь начать покорять морские просторы и скрывавшиеся в них новые земли, ' +
                'однако рано умер, успев передать свою мечту маленькому сыну, юному королю Мерину.',
            icon: iconMarkers.MaRaathPorts,
            hide: false
        },
        'Anhelm': {
            label: 'Анхельм',
            position: [42.6, 32.8],
            iconType: 'city',
            description: 'Одно из поселений Ма-Раах, стоящее у реки Хариэльвен.',
            icon: iconMarkers.MaRaathSmallCities,
            hide: false
        },
        'Thenber': {
            label: 'Тенбер',
            position: [41, 51],
            iconType: 'city',
            description: 'Самое восточное северное поселение.',
            icon: iconMarkers.MaRaathSmallCities,
            hide: false
        },
        'Gaumyor': {
            label: 'Гаумьор',
            position: [30, 51],
            iconType: 'city',
            description: 'Город-порт Гаумьор был сонован королем Харальдом, сыном первого короля Ма-Раах - Бьорна. ' +
                'Харальд, желая продемонстрировать великим драконам, держателям дара огня, знания своего народа на Ньяронском совете, построил первый порт и отплыл из него в Соларию на первом в мире корабле. ' +
                'Корабль носил имя его дочери Эйлы. Сейчас Гаумьор является основной торговой точкой с Соларией на территории северного королевства.',
            icon: iconMarkers.MaRaathPorts,
            hide: false
        },


    },
    countries: {
        Solaria: {
            label: 'Солария',
            position: [-27, 56],
            iconType: 'dragon',
            description: "Солария - дом драконов, территория материка, на которую прилетели драконы во время Великого исхода, " +
                "основав здесь свое государство.",
            icon: iconMarkers.DragonMarker,
            hide: true
        },
        Narimiya: {
            label: 'Наримия',
            position: [-15, -38],
            iconType: 'narimiya',
            description: 'Наримия - государство, вышедшее из племени первых людей, которых возглавлял в своем походе Нарим, отправившись на запад, к горам Цзардалар.',
            icon: iconMarkers.NarimiyaIcon,
            hide: true
        },
        'Ma-Raath': {
            label: 'Ма-Раах',
            position: [40, -5],
            iconType: 'narimiya',
            description: 'Ma-Раах - великое государство севера, основанное Марахом, великим первооткрывателем. ' +
                'Ма-Раах очень дружны с драконами, поэтому они образуют с Соларией многовековой военный, политический и торговый союз. ' +
                'Короли Ма-Раах обрели славу первооткрывателей: король Мерин открыл Летающие острова (Меринге), ' +
                'его дочь, Эйра Великая, нанесла на мировую карту Туманные острова.',
            icon: iconMarkers.MaRaathIcon,
            hide: true
        },
        Banuk: {
            label: 'Банук',
            position: [35, -45.5],
            iconType: 'banuk',
            description: 'Банук вышли из пелемени первых людей, чей предводитель остался неизвестным. ' +
                'Они, обосновавшись на северо-западе, предпочли вести отстранённый образ жизни, ' +
                'в отличие от всех остальных развитых государств, вышедших из племен первых людей. ' +
                'Однако позже Банук развязали первую войну на континенте, столвнувшись в проитовостоянии с Ма-Раах, за что были наказаны драконами.',
            icon: iconMarkers.BanukIcon,
            hide: true
        },
        Arona: {
            label: 'Арона',
            position: [-2, -10],
            iconType: 'arona',
            description: 'Арона - государство людей, вышедшее из племени Адарта. ' +
                'Адарт, отказавшись от драконьего дара в виде огня, отошел на запад за горы Лихтфер, ' +
                'основав там страну "свободных людей". ' +
                'Однако, не получив огня, люди арона обрекли себя на быстротечность собственного существования' +
                ' - их средняя продолжительность жизни состовляет около 60 лет.',
            icon: iconMarkers.AronaIcon,
            hide: true
        },
        Yuanhars: {
            label: 'Юэнхар',
            position: [-28, 5],
            iconType: 'yuanhars',
            description: 'Одно из диких разрозненных племён Фанхар, которые, отделившись от Хар, не получили огня. ' +
                'Юэнхар более прогрессивней своих южных соседей, однако менее воинственно.',
            icon: iconMarkers.YuanharsIcon,
            hide: true
        },
        Mavanhars: {
            label: 'Маванхар',
            position: [-46.5, -19],
            iconType: 'mavanhars',
            description: 'Одно из диких разрозненных племён Фанхар, которые, отделившись от Хар, не получили огня. ' +
                'Маванхар, располагаясь в бассейне братских рек, обладает воинственным духом и живет засчет постоянных набегов на своих северных соседей - Юэнхар.',
            icon: iconMarkers.MavanharsIcon,
            hide: true
        },
        Hunhars: {
            label: 'Хунхары',
            position: [10, -54],
            iconType: 'hunhars',
            description: 'Хунхары - племя, которое когда-то отделилось от племени Нарима и отправилось на север разведывать территории, ' +
                'но так и не вернулась обратно. Теперь Хунхары образуют самостоятельное государственное образование ' +
                'и даже совершают набеги на своих соседей - Банук и Наримию. Видимо, большинству из пелемени Хар присуща воинственность духа.',
            icon: iconMarkers.HunharsIcon,
            hide: true
        }
    },
    seas: {
        OdarrhuuOcean: {
            label: 'Океан Одаррхуу',
            position: [-50, -100],
            iconType: 'hunhars',
            description: 'Океан Одаррхуу',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        ElyegnosOcean: {
            label: 'Океан Эльейгнос',
            position: [50, 80],
            iconType: 'hunhars',
            description: 'Океан Эльейгнос',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        BlueSea: {
            label: 'Синее море',
            position: [4, 38],
            iconType: 'hunhars',
            description: 'Синее море',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        HaraldSea: {
            label: 'Море Харальда',
            position: [26, 28],
            iconType: 'hunhars',
            description: 'Море Харальда',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        EvksinSea: {
            label: 'Эвксинское море',
            position: [-44, -30],
            iconType: 'hunhars',
            description: 'Эвксинское море',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        WildSea: {
            label: 'Дикое море',
            position: [-44, -55],
            iconType: 'hunhars',
            description: 'Дикое море',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        SmokeSea: {
            label: 'Дымное море',
            position: [40, -55],
            iconType: 'hunhars',
            description: 'Дымное море',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        SunStrait: {
            label: 'Солнечный пролив',
            position: [-54.6, 105],
            iconType: 'hunhars',
            description: 'Солнечный пролив',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        IranshherBay: {
            label: 'Залив Ираншхер',
            position: [-44, 15],
            iconType: 'hunhars',
            description: 'Залив Ираншхер',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        SolberhRiver: {
            label: 'Река Солберх',
            position: [-47, 100],
            iconType: 'hunhars',
            description: 'Река Солберх',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        KhunberhRiver: {
            label: 'Река Кхунберх',
            position: [-40, 70],
            iconType: 'hunhars',
            description: 'Река Кхунберх',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        KhiringulRiver: {
            label: 'Река Кхирингул',
            position: [-8, 70],
            iconType: 'hunhars',
            description: 'Река Кхирингул',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        MalaghulRiver: {
            label: 'Река Малагхул',
            position: [-45, 34],
            iconType: 'hunhars',
            description: 'Река Малагхул',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        CzilighulRiver: {
            label: 'Река Цзилигхул',
            position: [-50, 25],
            iconType: 'hunhars',
            description: 'Река Цзилигхул',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        AghulRiver: {
            label: 'Река Aгхул',
            position: [-50, 31],
            iconType: 'hunhars',
            description: 'Река Агхул',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        InlandSea: {
            label: 'Внутреннее море',
            position: [-22, 13.4],
            iconType: 'hunhars',
            description: 'Внутреннее море',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        BasinFraternalRivers: {
            label: 'Бассейн Братских рек',
            position: [-52, -16],
            iconType: 'hunhars',
            description: 'Бассейн Братских рек',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        HunRiver: {
            label: 'Река Хун',
            position: [-7, -53],
            iconType: 'hunhars',
            description: 'Река Хун',
            icon: iconMarkers.SeasIcon,
            hide: true
        },
        HildelvenRiver: {
            label: 'Река Хилдэльвен',
            position: [42, -33],
            iconType: 'hunhars',
            description: 'Река Хилдэльвен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        HardеlvenRiver: {
            label: 'Река Хардэльвен',
            position: [40, -29],
            iconType: 'hunhars',
            description: 'Река Хардэльвен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        KelLake: {
            label: 'Озеро Кель',
            position: [42.5, -29],
            iconType: 'hunhars',
            description: 'Озеро Кель',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        BerhtelvenRiver: {
            label: 'Река Берхтэльвен',
            position: [45, -4],
            iconType: 'hunhars',
            description: 'Река Берхтэльвен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        GerelvenRiver: {
            label: 'Река Герэльвен',
            position: [47.6, 0.4],
            iconType: 'hunhars',
            description: 'Река Герэльвен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        HarielvenRiver: {
            label: 'Река Хариэльвен',
            position: [37, 40],
            iconType: 'hunhars',
            description: 'Река Хариэльвен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        MundRiver: {
            label: 'Река Мунд',
            position: [37, 53],
            iconType: 'hunhars',
            description: 'Река Мунд',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        HenRiver: {
            label: 'Река Хен',
            position: [35, 55],
            iconType: 'hunhars',
            description: 'Река Хен',
            icon: iconMarkers.SeasIcon,
            hide: false
        },
        HrotRiver: {
            label: 'Река Хрот',
            position: [33, 55],
            iconType: 'hunhars',
            description: 'Река Хрот',
            icon: iconMarkers.SeasIcon,
            hide: false
        }
    },
    mountains: {
        GhostMountains: {
            label: 'Призрачные горы',
            position: [-15, 117],
            iconType: 'city',
            description: 'Призрачные горы',
            icon: iconMarkers.MountainsIcon,
            hide: false
        },
        LihtferMountains: {
            label: 'Горы Лихтфер',
            position: [-30, 30],
            iconType: 'city',
            description: 'Горы Лихтфер',
            icon: iconMarkers.MountainsIcon,
            hide: false
        },
        ZcardalarMountains: {
            label: 'Горы Цзардалар',
            position: [-10, -25],
            iconType: 'city',
            description: 'Горы Цзардалар',
            icon: iconMarkers.MountainsIcon,
            hide: false
        },
        HarpiesMountains: {
            label: 'Горы Гарпий',
            position: [37, 5],
            iconType: 'city',
            description: 'Горы Гарпий',
            icon: iconMarkers.MountainsIcon,
            hide: false
        },
        HighSteppes: {
            label: 'Высокие степи',
            position: [27, -33],
            iconType: 'city',
            description: 'Высокие степи',
            icon: iconMarkers.MountainsIcon,
            hide: false
        },
    }
}

export default Data;