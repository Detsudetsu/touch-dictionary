/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

const convert = words => {
  let converted = false;
  const convertedWords = [];
  for (let j = 0; j < words.length; j++) {
    const word = words[j];
    const convertedWord = convertWord(word);
    if (convertedWord) {
      converted = true;
      convertedWords.push(convertedWord);
    } else {
      convertedWords.push(word);
    }
  }
  if (!converted) {
    return null;
  }
  return convertedWords;
};

const convertWord = word => {
  const w = spellings.get(word);
  if (w) {
    return w;
  }
  return null;
};

const spellings = new Map([
  ["Algonquin", "Algonquian"],
  ["Angora", "Ankara"],
  ["Archaeozoic", "Archeozoic"],
  ["Asiatic", "Asian"],
  ["Aussie", "Australian"],
  ["Bagdad", "Baghdad"],
  ["CGS", "second"],
  ["Caucasian", "Caucasoid"],
  ["Chanukah", "Hanukkah"],
  ["Christmas", "Christmastide"],
  ["Christmastime", "Christmastide"],
  ["Czechoslovakian", "Czechoslovak"],
  ["Dispersion", "Diaspora"],
  ["Erse", "Gaelic"],
  ["Filipine", "Philippine"],
  ["Filipino", "Philippine"],
  ["Hebraic", "Hebrew"],
  ["Hejira", "Hegira"],
  ["Internationale", "International"],
  ["Jakarta", "Djakarta"],
  ["JugoSlav", "Yugoslav"],
  ["JugoSlavia", "Yugoslavia"],
  ["Jugoslav", "Yugoslav"],
  ["Jugoslavia", "Yugoslavia"],
  ["Kelt", "Celt"],
  ["Keltic", "Celtic"],
  ["academia", "academe"],
  ["academism", "academicism"],
  ["acclimatization", "acclimation"],
  ["acclimatize", "acclimate"],
  ["achoo", "atchoo"],
  ["acid", "LSD"],
  ["acquaintanceship", "acquaintance"],
  ["administrate", "administer"],
  ["admonishment", "admonition"],
  ["adventure", "venture"],
  ["advert", "advertisement"],
  ["advertize", "advertise"],
  ["aerodrome", "airdrome"],
  ["aerofoil", "airfoil"],
  ["aeroplane", "airplane"],
  ["aery", "aerie"],
  ["aether", "ether"],
  ["aetiology", "etiology"],
  ["afore", "before"],
  ["ageing", "aging"],
  ["ahchoo", "atishoo"],
  ["airport", "airmail"],
  ["albumen", "albumin"],
  ["aline", "align"],
  ["alleluia", "hallelujah"],
  ["aluminium", "aluminum"],
  ["amidst", "amid"],
  ["amir", "emir"],
  ["ammo", "ammunition"],
  ["amoeba", "ameba"],
  ["amoebic", "amebic"],
  ["amok", "amuck"],
  ["amongst", "among"],
  ["annexe", "annex"],
  ["annunciate", "announce"],
  ["antechamber", "anteroom"],
  ["anticlockwise", "counterclockwise"],
  ["antiquary", "antiquarian"],
  ["antirrhinum", "snapdragon"],
  ["anyone", "anybody"],
  ["anyplace", "anywhere"],
  ["anyway", "anyhow"],
  ["apanage", "appanage"],
  ["aphis", "aphid"],
  ["apocynthion", "apolune"],
  ["apophthegm", "apothegm"],
  ["apothecary", "pharmacist"],
  ["aquavit", "akvavit"],
  ["aquiculture", "aquaculture"],
  ["archeological", "archaeological"],
  ["archeologist", "archaeologist"],
  ["archeology", "archaeology"],
  ["archetypical", "archetypal"],
  ["arithmetic", "arithmetical"],
  ["armour", "armor"],
  ["arse", "ass"],
  ["artefact", "artifact"],
  ["ashbin", "dustbin"],
  ["astraddle", "astride"],
  ["atishoo", "atchoo"],
  ["aubergine", "eggplant"],
  ["auto", "automobile"],
  ["awaken", "awake"],
  ["awestricken", "awestruck"],
  ["axle", "axletree"],
  ["backcloth", "backdrop"],
  ["backhand", "backhanded"],
  ["bale", "bail"],
  ["baluster", "balustrade"],
  ["banian", "banyan"],
  ["bannister", "banister"],
  ["banqueting", "barkentine"],
  ["barman", "bartender"],
  ["baroque", "bark"],
  ["basswood", "bass"],
  ["battleground", "battlefield"],
  ["baulk", "balk"],
  ["beano", "bingo"],
  ["bedchamber", "bedroom"],
  ["begrudge", "grudge"],
  ["behove", "behoove"],
  ["behaviour", "behavior"],
  ["bellhop", "bellboy"],
  ["belligerency", "belligerence"],
  ["betwixt", "between"],
  ["bicentenary", "bicentennial"],
  ["bike", "bicycle"],
  ["billsticker", "billposter"],
  ["blab", "blabber"],
  ["blaeberry", "bilberry"],
  ["blowpipe", "blowgun"],
  ["blowtorch", "blowlamp"],
  ["bobsleigh", "bobsled"],
  ["boloney", "baloney"],
  ["bookie", "bookmaker"],
  ["bookstand", "bookrack"],
  ["bounteous", "bountiful"],
  ["bowlder", "boulder"],
  ["box", "boxwood"],
  ["brake", "bracken"],
  ["brer", "brother"],
  ["briar", "brier"],
  ["brilliancy", "brilliance"],
  ["broider", "embroider"],
  ["broncho", "bronco"],
  ["brushwood", "brush"],
  ["buggery", "sodomy"],
  ["bung", "bunghole"],
  ["burgle", "burglarize"],
  ["burthen", "burden"],
  ["caddy", "caddie"],
  ["caecum", "cecum"],
  ["caesium", "cesium"],
  ["calibre", "caliber"],
  ["calif", "caliph"],
  ["califate", "caliphate"],
  ["callipers", "calipers"],
  ["callisthenics", "calisthenics"],
  ["candidature", "candidacy"],
  ["cannon", "carom"],
  ["canon", "canyon"],
  ["caprice", "capriccio"],
  ["carabineer", "carbineer"],
  ["carabinier", "carbineer"],
  ["caroller", "caroler"],
  ["carrousel", "carousel"],
  ["catchup", "ketchup"],
  ["catholicity", "Catholicism"],
  ["catsup", "ketchup"],
  ["cauldron", "caldron"],
  ["causation", "causality"],
  ["cayman", "caiman"],
  ["centre", "center"],
  ["cesspool", "cesspit"],
  ["cgs", "second"],
  ["chamomile", "camomile"],
  ["channelise", "channel"],
  ["channelize", "channel"],
  ["chanty", "chantey"],
  ["char", "tea"],
  ["charlady", "charwoman"],
  ["chemist", "pharmacist"],
  ["chequer", "checker"],
  ["chevvy", "chivy"],
  ["chevy", "chivy"],
  ["chieftaincy", "cfieftainship"],
  ["childbearing", "childbirth"],
  ["chimaera", "chimera"],
  ["chimneypiece", "mantelpiece"],
  ["chimp", "chimpanzee"],
  ["chokey", "choky"],
  ["chopfallen", "chapfallen"],
  ["choral", "chorale"],
  ["chrysalid", "chrysalis"],
  ["chrysolite", "olivine"],
  ["churr", "chirr"],
  ["chute", "parachute"],
  ["cine", "cinematography"],
  ["cion", "scion"],
  ["cissy", "sissy"],
  ["citrous", "citrus"],
  ["clamour", "clamor"],
  ["cleric", "clergyman"],
  ["clingy", "clinging"],
  ["cliquey", "cliquish"],
  ["closure", "cloture"],
  ["cockswain", "coxswain"],
  ["cog", "cogwheel"],
  ["coherency", "coherence"],
  ["coif", "coiffure"],
  ["coiffeur", "hairdresser"],
  ["coke", "cocaine"],
  ["colour", "color"],
  ["colter", "coulter"],
  ["comfy", "comfortable"],
  ["commie", "communist"],
  ["committal", "commitment"],
  ["competency", "competence"],
  ["complacence", "complacency"],
  ["complainant", "plaintiff"],
  ["compleat", "complete"],
  ["complected", "complexioned"],
  ["compliancy", "compliance"],
  ["concierge", "caretaker"],
  ["conciliative", "conciliatory"],
  ["confab", "confabulation"],
  ["congrats", "congratulations"],
  ["congruency", "congruence"],
  ["congruous", "congruent"],
  ["conical", "conic"],
  ["connexion", "connection"],
  ["connubial", "conjugal"],
  ["convolute", "convoluted"],
  ["copeck", "kopeck"],
  ["copse", "coppice"],
  ["copter", "helicopter"],
  ["cornball", "corny"],
  ["cornflour", "cornstarch"],
  ["correspondent", "corresponding"],
  ["corrie", "cirque"],
  ["corse", "corpse"],
  ["cos", "because"],
  ["cosigner", "cosignatory"],
  ["cosmetologist", "beautician"],
  ["costumier", "costumer"],
  ["cot", "cotangent"],
  ["coterminous", "conterminous"],
  ["cowardliness", "cowardice"],
  ["cowhand", "cowboy"],
  ["cowl", "cowling"],
  ["cowpoke", "cowboy"],
  ["cowpuncher", "cowboy"],
  ["cox", "coxswain"],
  ["coz", "cousin"],
  ["crape", "crepe"],
  ["crawfish", "crayfish"],
  ["crawler", "rompers"],
  ["crawly", "creepy"],
  ["creeper", "rompers"],
  ["crispiness", "crispness"],
  ["cromlech", "dolmen"],
  ["crossway", "crossroad"],
  ["crozier", "crosier"],
  ["cryptograph", "cryptogram"],
  ["cubist", "cubistic"],
  ["cuddlesome", "cuddly"],
  ["cue", "queue"],
  ["cullender", "colander"],
  ["cultivatable", "cultivable"],
  ["cumbrous", "cumbersome"],
  ["curst", "cursed"],
  ["cuss", "curse"],
  ["cutaway", "tailcoat"],
  ["cyclopaedia", "encyclopedia"],
  ["cyclopedia", "encyclopedia"],
  ["cyder", "cider"],
  ["cypher", "cipher"],
  ["daemon", "demon"],
  ["damn", "damnation"],
  ["dampen", "damp"],
  ["darn", "damn"],
  ["dashed", "damned"],
  ["daw", "jackdaw"],
  ["deb", "debutante"],
  ["debark", "disembark"],
  ["defrock", "unfrock"],
  ["demist", "defrost"],
  ["demister", "defroster"],
  ["derby", "bowler"],
  ["dermis", "derma"],
  ["descendent", "descendant"],
  ["deshabille", "dishabille"],
  ["despatch", "dispatch"],
  ["devalue", "devaluate"],
  ["devilry", "deviltry"],
  ["dextrous", "dexterous"],
  ["diagrammatical", "diagrammatic"],
  ["dialectical", "dialectal"],
  ["diallingcode", "dialing"],
  ["diametric", "diametrical"],
  ["dieresis", "diaeresis"],
  ["dingy", "dinghy"],
  ["diplomatist", "diplomat"],
  ["disafforest", "deforest"],
  ["disapprobation", "disapproval"],
  ["disassociate", "dissociate"],
  ["disc", "disk"],
  ["discontent", "discontented"],
  ["discontentment", "discontent"],
  ["disease", "diseur"],
  ["disenfranchise", "disfranchise"],
  ["disforest", "deforest"],
  ["disfrock", "unfrock"],
  ["disillusion", "disillusionment"],
  ["disorientate", "disorient"],
  ["dissimilitude", "dissimilarity"],
  ["dissimulate", "dissemble"],
  ["distressing", "distressful"],
  ["disunion", "disunity"],
  ["divertissement", "divertimento"],
  ["djinn", "genie"],
  ["doc", "doctor"],
  ["dogmatical", "dogmatic"],
  ["doorknocker", "knocker"],
  ["doorman", "doorkeeper"],
  ["doorpost", "doorjamb"],
  ["dorm", "dormitory"],
  ["dowse", "douse"],
  ["doyley", "doily"],
  ["doyly", "doily"],
  ["drabs", "dribs"],
  ["draggled", "bedraggled"],
  ["drat", "damn"],
  ["draught", "draft"],
  ["draughts", "checkers"],
  ["draughtsman", "draftsman"],
  ["draughty", "drafty"],
  ["drear", "dreary"],
  ["dredger", "dredge"],
  ["dribblet", "driblet"],
  ["drily", "dryly"],
  ["dropsy", "edema"],
  ["dryer", "drier"],
  ["dud", "clothes"],
  ["dueler", "duelist"],
  ["dueller", "duelist"],
  ["dummy", "pacifier"],
  ["dyke", "dike"],
  ["e'en", "even"],
  ["e'er", "ever"],
  ["earlap", "earflap"],
  ["ebon", "ebony"],
  ["ecclesiastic", "ecclesiastical"],
  ["ecru", "beige"],
  ["edgeways", "edgewise"],
  ["educationist", "educator"],
  ["effete", "effeminate"],
  ["egis", "aegis"],
  ["eglantine", "sweetbriar"],
  ["egoistical", "egoistic"],
  ["egotistical", "egotistic"],
  ["eider", "eiderdown"],
  ["elderberry", "elder"],
  ["elliptic", "elliptical"],
  ["elvish", "elfish"],
  ["embryonic", "embryo"],
  ["emplane", "enplane"],
  ["endwise", "endways"],
  ["enigmatical", "enigmatic"],
  ["enquire", "inquire"],
  ["enquiry", "inquiry"],
  ["ensilage", "silage"],
  ["envision", "envisage"],
  ["epicurean", "epicure"],
  ["episcopate", "episcopacy"],
  ["epithalamium", "epithalamion"],
  ["eremite", "hermit"],
  ["ergonomics", "biotechnology"],
  ["escallop", "scallop"],
  ["esthete", "aesthete"],
  ["esthetic", "aesthetic"],
  ["esthetics", "aesthetics"],
  ["estivate", "aestivate"],
  ["ethanol", "alcohol"],
  ["ethic", "ethical"],
  ["evangelism", "evangelicalism"],
  ["everyplace", "everywhere"],
  ["excepting", "except"],
  ["exhibiter", "exhibitor"],
  ["extortionist", "extortioner"],
  ["extravert", "extrovert"],
  ["eyrie", "aerie"],
  ["eyry", "aerie"],
  ["facecloth", "washcloth"],
  ["factor", "factorize"],
  ["faeces", "feces"],
  ["fail", "failure"],
  ["fanatic", "fanatical"],
  ["fanlight", "transom"],
  ["favour", "favor"],
  ["favourable", "favorable"],
  ["favouritism", "favoritism"],
  ["feaze", "faze"],
  ["felspar", "feldspar"],
  ["fettucini", "fettuccini"],
  ["fibre", "fiber"],
  ["fiche", "microfiche"],
  ["fictive", "fictitious"],
  ["filtrate", "filter"],
  ["fineable", "finable"],
  ["finicky", "finical"],
  ["firedog", "andiron"],
  ["firefighter", "fireman"],
  ["fjord", "fiord"],
  ["flack", "flak"],
  ["flagstaff", "flagpole"],
  ["flamboyancy", "flamboyance"],
  ["flautist", "flutist"],
  ["floatation", "flotation"],
  ["flourmill", "mill"],
  ["flunkey", "flunky"],
  ["flyer", "flier"],
  ["flyover", "flyby"],
  ["flypast", "flyby"],
  ["focsle", "forecastle"],
  ["foetal", "fetal"],
  ["foetus", "fetus"],
  ["fogey", "forgy"],
  ["foldboat", "faltboat"],
  ["forefend", "forfend"],
  ["forelady", "forewoman"],
  ["fragmental", "fragmentary"],
  ["frank", "frankfurter"],
  ["freaky", "freakish"],
  ["fresher", "freshman"],
  ["friz", "frizzle"],
  ["frizz", "frizzle"],
  ["frizzy", "frizzly"],
  ["frumpy", "frumpish"],
  ["fungoid", "fungous"],
  ["furthest", "farthest"],
  ["fussbudget", "fusspot"],
  ["fuzee", "fusee"],
  ["gaberdine", "gabardine"],
  ["gage", "gauge"],
  ["gammy", "game"],
  ["gaol", "jail"],
  ["gaolbird", "jailbird"],
  ["gaoler", "jailer"],
  ["garbanzo", "chickpea"],
  ["garfish", "gar"],
  ["gastronomical", "gastronomic"],
  ["gauntlet", "gantlet"],
  ["gayety", "gaiety"],
  ["gel", "jell"],
  ["genitalia", "genitals"],
  ["ghost", "ghostwrite"],
  ["gip", "gyp"],
  ["gipsy", "gypsy"],
  ["gismo", "gizmo"],
  ["glad", "gladiolus"],
  ["glister", "glitter"],
  ["goalie", "goalkeeper"],
  ["goddamn", "damned"],
  ["golosh", "galosh"],
  ["gramme", "gram"],
  ["grandad", "granddad"],
  ["grape", "grapevine"],
  ["graphical", "graphic"],
  ["grapple", "grapnel"],
  ["grey", "gray"],
  ["greyish", "grayish"],
  ["groundhog", "woodchuck"],
  ["groundnut", "peanut"],
  ["gryphon", "griffin"],
  ["gulden", "guilder"],
  ["gunge", "gunk"],
  ["gunnel", "gunwale"],
  ["gutty", "gutsy"],
  ["guvnor", "guv"],
  ["haemorrhage", "hemorrhage"],
  ["hairdresser", "beautician"],
  ["hairsbreadth", "hairbreadth"],
  ["hallah", "challah"],
  ["halloo", "hallo"],
  ["hardback", "hardcover"],
  ["hasheesh", "hashish"],
  ["hast", "have"],
  ["hatchway", "hatch"],
  ["hath", "has"],
  ["hayrick", "haystack"],
  ["headfirst", "headlong"],
  ["headlamp", "headlight"],
  ["headset", "headphone"],
  ["heartsease", "pansy"],
  ["heatstroke", "sunstroke"],
  ["helpmeet", "helpmate"],
  ["henceforward", "henceforth"],
  ["hereunto", "hereto"],
  ["hermetical", "hermetic"],
  ["heroical", "heroic"],
  ["hiccough", "hiccup"],
  ["hierarchic", "hierarchical"],
  ["hieroglyph", "hieroglyphic"],
  ["hifalutin", "highfalutin"],
  ["hippy", "hippie"],
  ["hoar", "hoary"],
  ["hoarhound", "horehound"],
  ["hollo", "hallo"],
  ["homophile", "homosexual"],
  ["homy", "homey"],
  ["honour", "honor"],
  ["honourable", "honorable"],
  ["hood", "hoodlum"],
  ["hooligan", "hoodlum"],
  ["hooray", "hurray"],
  ["hortative", "hortatory"],
  ["howe'er", "however"],
  ["hullo", "hello"],
  ["humour", "humor"],
  ["hunchback", "humpback"],
  ["hunchbacked", "humpbacked"],
  ["hunky", "honky"],
  ["hurrah", "hurray"],
  ["huzza", "hurray"],
  ["huzzah", "hurray"],
  ["hydropathy", "hydrotherapy"],
  ["hyphen", "hyphenate"],
  ["hypnosis", "hypnotism"],
  ["iamb", "iambus"],
  ["ikon", "icon"],
  ["illusory", "illusive"],
  ["imbecilic", "imbecile"],
  ["imbed", "embed"],
  ["immoderacy", "immoderation"],
  ["impanel", "empanel"],
  ["impressible", "impressionable"],
  ["incase", "encase"],
  ["inclose", "enclose"],
  ["inclosure", "enclosure"],
  ["inconsequential", "inconsequent"],
  ["incrust", "encrust"],
  ["incrustation", "encrustation"],
  ["inculpate", "incriminate"],
  ["incumber", "encumber"],
  ["incumbrance", "encumbrance"],
  ["indorse", "endorse"],
  ["indorsement", "endorsement"],
  ["indue", "endue"],
  ["info", "information"],
  ["infold", "enfold"],
  ["ingraft", "engraft"],
  ["inkbottle", "inkpot"],
  ["inkpad", "pad"],
  ["initialisation", "initialization"],
  ["inmost", "innermost"],
  ["insistency", "insistence"],
  ["instalment", "installment"],
  ["intensive", "intensifier"],
  ["interne", "intern"],
  ["interpretive", "interpretative"],
  ["intrench", "entrench"],
  ["intrenchment", "entrenchment"],
  ["intrust", "entrust"],
  ["invalidity", "invalidism"],
  ["irrelevancy", "irrelevance"],
  ["jackdaw", "daw"],
  ["janitor", "caretaker"],
  ["jaybird", "jay"],
  ["jell", "jelly"],
  ["jessamine", "jasmine"],
  ["jinn", "genie"],
  ["jinni", "genie"],
  ["joyous", "joyful"],
  ["kabob", "kebab"],
  ["kaftan", "caftan"],
  ["kalends", "calends"],
  ["kalium", "potassium"],
  ["kerbstone", "curbstone"],
  ["kerchoo", "atchoo"],
  ["khalif", "caliph"],
  ["khalifate", "califate"],
  ["kinfolk", "kinsfolk"],
  ["kinfolks", "kinsfolk"],
  ["kingpin", "kingbolt"],
  ["kit", "kitten"],
  ["knobbly", "knobby"],
  ["kola", "cola"],
  ["kotow", "kowtow"],
  ["labour", "labor"],
  ["laboured", "labored"],
  ["labourer", "laborer"],
  ["lampoonist", "lampooner"],
  ["larkspur", "delphinium"],
  ["launderet", "laundromat"],
  ["launderette", "laundromat"],
  ["laundrywoman", "laundress"],
  ["leafed", "leaved"],
  ["leastways", "leastwise"],
  ["legit", "legitimate"],
  ["legitimatise", "legitimate"],
  ["legitimatize", "legitimate"],
  ["legitimise", "legitimate"],
  ["legitimize", "legitimate"],
  ["lengthways", "lengthwise"],
  ["letterbox", "mailbox"],
  ["leucotomy", "lobotomy"],
  ["lichi", "litchi"],
  ["liftman", "liftboy"],
  ["likeable", "likable"],
  ["limo", "limousine"],
  ["linertrain", "freightliner"],
  ["liquorice", "licorice"],
  ["litre", "liter"],
  ["litterbin", "litterbag"],
  ["litterlout", "litterbug"],
  ["liveable", "livable"],
  ["livery", "liverish"],
  ["loadstar", "lodestar"],
  ["loadstone", "lodestone"],
  ["lockjaw", "tetanus"],
  ["loll", "lollipop"],
  ["longwearing", "hardwearing"],
  ["longwise", "longways"],
  ["loth", "loath"],
  ["lour", "lower"],
  ["loveable", "lovable"],
  ["lubricious", "lubricous"],
  ["lucerne", "alfalfa"],
  ["lustre", "luster"],
  ["lychee", "litchi"],
  ["lyrist", "lyricist"],
  ["Mahomet", "Muhammad"],
  ["Malayan", "Malay"],
  ["Mohammed", "Muhammad"],
  ["Mohammedan", "Muslim"],
  ["Mohican", "Mahican"],
  ["Moslem", "Muslim"],
  ["Nipponese", "Japanese"],
  ["Norse", "Norwegian"],
  ["Norseman", "Northman"],
  ["Pekinese", "Pekingese"],
  ["Principality", "Wales"],
  ["Roumania", "Romania"],
  ["Roumanian", "Romanian"],
  ["Rumania", "Romania"],
  ["Rumanian", "Romanian"],
  ["Saghalien", "Sakhalin"],
  ["Scotch", "Scottish"],
  ["Scots", "Scottish"],
  ["Scotsman", "Scotchman"],
  ["Scotswoman", "Scotchwoman"],
  ["Singhalese", "Sinhalese"],
  ["Siva", "Shiva"],
  ["Slavonic", "Slavic"],
  ["Stewart", "Stuart"],
  ["Sukkoth", "Succoth"],
  ["Vergil", "Virgil"],
  ["Welch", "Welsh"],
  ["Whit", "Whitsunday"],
  ["Yank", "Yankee"],
  ["Yule", "Yuletide"],
  ["magi", "magazine"],
  ["magnesia", "magnesium"],
  ["malcontented", "malcontent"],
  ["manikin", "mannequin"],
  ["manioc", "cassava"],
  ["mannikin", "mannequin"],
  ["manoeuvre", "maneuver"],
  ["mantel", "mantelpiece"],
  ["marinade", "marinate"],
  ["mason", "Freemason"],
  ["masonry", "Freemasonry"],
  ["mattins", "matins"],
  ["meanwhile", "meantime"],
  ["menad", "maenad"],
  ["metamorphism", "metamorphosis"],
  ["metre", "meter"],
  ["metric", "metrical"],
  ["miaow", "meow"],
  ["mid", "amid"],
  ["middlemost", "midmost"],
  ["midships", "amidships"],
  ["midst", "amid"],
  ["mike", "microphone"],
  ["milkmaid", "dairymaid"],
  ["milometer", "mileometer"],
  ["mimeo", "mimeograph"],
  ["miniscule", "minuscule"],
  ["mitre", "miter"],
  ["mizzen", "mizzenmast"],
  ["mom", "mother"],
  ["momma", "mama"],
  ["monied", "moneyed"],
  ["mono", "monophonic"],
  ["motorway", "expressway"],
  ["mould", "mold"],
  ["moulder", "molder"],
  ["moulding", "molding"],
  ["mouldy", "moldy"],
  ["moult", "molt"],
  ["mouthorgan", "panpipe"],
  ["muleskinner", "muleteer"],
  ["mummy", "mommy"],
  ["myrtle", "periwinkle"],
  ["naif", "naive"],
  ["naivety", "naivete"],
  ["napkin", "diaper"],
  ["nappy", "diaper"],
  ["nationalistic", "nationalist"],
  ["naturalist", "naturalistic"],
  ["ne'er", "never"],
  ["neath", "beneath"],
  ["necktie", "tie"],
  ["negative", "negate"],
  ["nett", "net"],
  ["newsagent", "newsdealer"],
  ["nicknack", "knickknack"],
  ["niggard", "niggardly"],
  ["nightdress", "nightgown"],
  ["nightie", "nightgown"],
  ["nit", "nitwit"],
  ["nitre", "niter"],
  ["normalcy", "normality"],
  ["northland", "Scandinavia"],
  ["nought", "naught"],
  ["nowise", "noways"],
  ["numbskull", "numskull"],
  ["obi", "obeah"],
  ["obit", "obituary"],
  ["obsessive", "obsessional"],
  ["oceangoing", "seagoing"],
  ["odour", "odor"],
  ["oecumenical", "ecumenical"],
  ["oesophagus", "esophagus"],
  ["oestrogen", "estrogen"],
  ["offload", "unload"],
  ["oftentimes", "often"],
  ["ofttimes", "oftentimes"],
  ["oldy", "oldie"],
  ["oleo", "oleomargarine"],
  ["oomiak", "umiak"],
  ["optimal", "optimum"],
  ["orientate", "orient"],
  ["ostler", "hostler"],
  ["ousel", "ouzel"],
  ["outhouse", "outbuilding"],
  ["outmost", "outermost"],
  ["overarm", "overhand"],
  ["overcall", "overbid"],
  ["pacesetter", "pacemaker"],
  ["paediatrician", "pediatrician"],
  ["paediatrics", "pediatrics"],
  ["paillasse", "palliasse"],
  ["pantheistical", "pantheistic"],
  ["panto", "pantomime"],
  ["papaw", "papaya"],
  ["paperboy", "newsboy"],
  ["pappy", "father"],
  ["paraffin", "kerosene"],
  ["paras", "paratroops"],
  ["pardon", "indulgence"],
  ["pareve", "parve"],
  ["parrakeet", "parakeet"],
  ["passivity", "passiveness"],
  ["patella", "kneecap"],
  ["patience", "solitaire"],
  ["pawpaw", "papaw"],
  ["pedicle", "pedicel"],
  ["pedlar", "peddler"],
  ["pendant", "pendent"],
  ["pendent", "pendant"],
  ["pennorth", "pennyworth"],
  ["pentagram", "pentacle"],
  ["perk", "percolate"],
  ["persnickety", "pernickety"],
  ["personalty", "personal"],
  ["peruke", "periwig"],
  ["petrol", "gasoline"],
  ["phage", "bacteriophage"],
  ["pharmacy", "drugstore"],
  ["phial", "vial"],
  ["philosophical", "philosophic"],
  ["phrenetic", "frenetic"],
  ["physio", "physiotherapist"],
  ["pianoforte", "piano"],
  ["pick", "plectrum"],
  ["pickaback", "piggyback"],
  ["piggery", "pigsty"],
  ["pigmy", "pygmy"],
  ["pignut", "earthnut"],
  ["pigpen", "pigsty"],
  ["pike", "turnpike"],
  ["pilau", "pilaf"],
  ["pimiento", "pimento"],
  ["pimpled", "pimply"],
  ["pinchers", "pincers"],
  ["pinny", "pinafore"],
  ["pinspotter", "pinsetter"],
  ["pinyon", "pinon"],
  ["pipal", "peepul"],
  ["plait", "pleat"],
  ["plash", "splash"],
  ["platelayer", "tracklayer"],
  ["plummet", "plumb"],
  ["pocked", "pockmarked"],
  ["podgy", "pudgy"],
  ["poesy", "poetry"],
  ["pollywog", "polliwog"],
  ["poly", "polytechnic"],
  ["polythene", "polyethylene"],
  ["porn", "pornography"],
  ["porno", "pornography"],
  ["poser", "poseur"],
  ["possum", "opossum"],
  ["postbag", "mailbag"],
  ["powerboat", "motorboat"],
  ["practise", "practice"],
  ["practised", "practiced"],
  ["pram", "perambulator"],
  ["prebend", "prebendary"],
  ["predestinate", "predestine"],
  ["premedic", "premed"],
  ["prepack", "prepackage"],
  ["presuming", "presumptuous"],
  ["pretor", "praetor"],
  ["pretorian", "praetorian"],
  ["priapic", "phallic"],
  ["pricy", "pricey"],
  ["prink", "primp"],
  ["programme", "program"],
  ["prohibitory", "prohibitive"],
  ["prolegomena", "prolegomenon"],
  ["proselyte", "proselytize"],
  ["providing", "provided"],
  ["prudential", "prudent"],
  ["pryer", "prier"],
  ["puma", "cougar"],
  ["pummel", "pommel"],
  ["purposive", "purposeful"],
  ["pyjamas", "pajamas"],
  ["racecourse", "racetrack"],
  ["rachitis", "rickets"],
  ["racialism", "racism"],
  ["racialist", "racist"],
  ["racoon", "raccoon"],
  ["racquet", "racket"],
  ["radiancy", "radiance"],
  ["radiation", "radioactivity"],
  ["radiophone", "radiotelepone"],
  ["ranchman", "rancher"],
  ["rani", "ranee"],
  ["rateable", "ratable"],
  ["rattler", "rattlesnake"],
  ["rec", "recreation"],
  ["recap", "recapitulation"],
  ["recreancy", "recreance"],
  ["reenforce", "reinforce"],
  ["ref", "referee"],
  ["regime", "regimen"],
  ["relique", "relic"],
  ["renascence", "renaissance"],
  ["repetitive", "repetitious"],
  ["reptile", "reptilian"],
  ["reptilian", "reptile"],
  ["resplendency", "resplendence"],
  ["revery", "reverie"],
  ["rhino", "rhinoceros"],
  ["riband", "ribbon"],
  ["rigour", "rigor"],
  ["rime", "rhyme"],
  ["risky", "risque"],
  ["road", "roadstead"],
  ["rontgen", "roentgen"],
  ["rowlock", "oarlock"],
  ["rumour", "rumor"],
  ["sabre", "saber"],
  ["saccharine", "saccharin"],
  ["safebreaker", "safecracker"],
  ["sage", "sagebrush"],
  ["saleable", "salable"],
  ["saleroom", "salesroom"],
  ["sanitarium", "sanatorium"],
  ["sanitorium", "sanatorium"],
  ["sarape", "serape"],
  ["sarge", "sergeant"],
  ["sarky", "sarcastic"],
  ["sassy", "saucy"],
  ["satiate", "sate"],
  ["satin", "satiny"],
  ["satiric", "satirical"],
  ["sauce", "sass"],
  ["savour", "savor"],
  ["savoury", "savory"],
  ["sax", "saxophone"],
  ["scarce", "scarcely"],
  ["sceptic", "skeptic"],
  ["sceptical", "skeptical"],
  ["scepticism", "skepticism"],
  ["sceptre", "scepter"],
  ["schnorkel", "snorkel"],
  ["schoolfellow", "schoolmate"],
  ["scollop", "scallop"],
  ["scutcheon", "escutcheon"],
  ["seagoing", "seafaring"],
  ["seagull", "gull"],
  ["sear", "sere"],
  ["sectary", "sectarian"],
  ["seminarist", "seminarian"],
  ["semipro", "semiprofessional"],
  ["sepulchre", "sepulcher"],
  ["serrated", "serrate"],
  ["servo", "servomotor"],
  ["sewerage", "sewage"],
  ["shantey", "chantey"],
  ["shanty", "chantey"],
  ["share", "plowshare"],
  ["sharpie", "sharper"],
  ["sharpy", "sharper"],
  ["shew", "show"],
  ["shoeblack", "bootblack"],
  ["shoppe", "shop"],
  ["shote", "shoat"],
  ["shouldst", "should"],
  ["shrine", "enshrine"],
  ["sideboards", "sideburns"],
  ["sidewise", "sideways"],
  ["silvan", "sylvan"],
  ["singletree", "whiffletree"],
  ["sion", "zion"],
  ["sirup", "syrup"],
  ["sissified", "sissy"],
  ["sizeable", "sizable"],
  ["skullduggery", "skulduggery"],
  ["slantways", "slantwise"],
  ["slaw", "coleslaw"],
  ["sledge", "sledgehammer"],
  ["slipover", "pullover"],
  ["slue", "slough"],
  ["smooth", "smoothly"],
  ["smoulder", "smolder"],
  ["snigger", "snicker"],
  ["snuffle", "sniffle"],
  ["softie", "softy"],
  ["somnambulism", "sleepwalking"],
  ["somnambulist", "sleepwalker"],
  ["soph", "sophomore"],
  ["sorbet", "sherbet"],
  ["soubriquet", "sobriquet"],
  ["soy", "soybean"],
  ["spaceship", "spacecraft"],
  ["sparseness", "sparsity"],
  ["speciality", "specialty"],
  ["specs", "specification"],
  ["spirt", "spurt"],
  ["spittoon", "cuspidor"],
  ["spoondrift", "spindrift"],
  ["springtide", "springtime"],
  ["stairway", "staircase"],
  ["stanch", "staunch"],
  ["staph", "staphylococcus"],
  ["starlight", "starlit"],
  ["staunch", "stanch"],
  ["steno", "stenography"],
  ["stereo", "stereophonic"],
  ["stockholder", "shareholder"],
  ["stoical", "stoic"],
  ["strep", "streptococcus"],
  ["strobe", "stroboscope"],
  ["submerse", "submerge"],
  ["submersion", "submergence"],
  ["succour", "succor"],
  ["succulency", "succulence"],
  ["sump", "crankcase"],
  ["sundown", "sunset"],
  ["sunup", "sunrise"],
  ["supplemental", "supplementary"],
  ["surreal", "surrealistic"],
  ["swarth", "swarthy"],
  ["swathe", "swath"],
  ["sweep", "sweepstakes"],
  ["swop", "swap"],
  ["syllabification", "syllabication"],
  ["syllabify", "syllabicate"],
  ["syllabub", "sillabub"],
  ["sync", "synchronization"],
  ["synch", "synchronization"],
  ["syphon", "siphon"],
  ["tablespoon", "tablespoonful"],
  ["tabu", "taboo"],
  ["tach", "tachometer"],
  ["tailboard", "tailgate"],
  ["takeaway", "carryout"],
  ["talcum", "talc"],
  ["taleteller", "talebearer"],
  ["tallboy", "highboy"],
  ["taproom", "barroom"],
  ["teaspoon", "teaspoonful"],
  ["teazel", "teasel"],
  ["teazle", "teasel"],
  ["technic", "technique"],
  ["teen", "teenager"],
  ["teeny", "tiny"],
  ["teepee", "tepee"],
  ["tele", "television"],
  ["teleprinter", "teletypewriter"],
  ["telly", "television"],
  ["tenuity", "tenuousness"],
  ["tercentennial", "tercentenary"],
  ["testis", "testicle"],
  ["text", "textbook"],
  ["thegn", "thane"],
  ["them", "those"],
  ["therapy", "psychotherapy"],
  ["throstle", "thrush"],
  ["throughway", "thruway"],
  ["thru", "through"],
  ["thwack", "whack"],
  ["timbrel", "tambourine"],
  ["titty", "tit"],
  ["toffee", "taffy"],
  ["toffy", "taffy"],
  ["toilette", "toilet"],
  ["tote", "totalizator"],
  ["townsfolk", "townspeople"],
  ["towrope", "towline"],
  ["transcendency", "transcendence"],
  ["tranship", "transship"],
  ["transiency", "transience"],
  ["translucency", "translucence"],
  ["trapes", "traipse"],
  ["treacle", "molasses"],
  ["trepan", "trephine"],
  ["tricentenary", "tercentenary"],
  ["tricentennial", "tercentenary"],
  ["tromp", "tramp"],
  ["tsar", "czar"],
  ["tsarina", "czarina"],
  ["tuberculate", "tubercular"],
  ["tug", "tugboat"],
  ["tunny", "tuna"],
  ["tuppence", "twopence"],
  ["tuppenny", "twopenny"],
  ["turnaround", "turnabout"],
  ["tux", "tuxedo"],
  ["twinkle", "twinkling"],
  ["twirp", "twerp"],
  ["tympani", "timpani"],
  ["typographical", "typographic"],
  ["tyre", "tire"],
  ["tzar", "czar"],
  ["tzarina", "czarina"],
  ["unalienable", "inalienable"],
  ["underclothing", "underclothes"],
  ["underhanded", "underhand"],
  ["underscore", "underline"],
  ["upmost", "uppermost"],
  ["uppity", "uppish"],
  ["uraemia", "uremia"],
  ["useable", "usable"],
  ["vagrom", "vagrant"],
  ["valency", "valence"],
  ["valorous", "valiant"],
  ["valour", "valor"],
  ["vanguard", "van"],
  ["vapour", "vapor"],
  ["vasty", "vast"],
  ["vender", "vendor"],
  ["venturous", "venturesome"],
  ["vet", "veteran"],
  ["veterinary", "veterinarian"],
  ["vial", "phial"],
  ["vibes", "vibration"],
  ["vibraharp", "vibraphone"],
  ["vicinage", "vicinity"],
  ["vigour", "vigor"],
  ["villain", "villein"],
  ["viscous", "viscid"],
  ["vizor", "visor"],
  ["wabble", "wobble"],
  ["wain", "wagon"],
  ["wank", "masturbation"],
  ["washbasin", "washbowl"],
  ["washrag", "washcloth"],
  ["washwoman", "washerwoman"],
  ["weatherboard", "clapboard"],
  ["weirdo", "weirdie"],
  ["welch", "welsh"],
  ["whacky", "wacky"],
  ["whate'er", "whatever"],
  ["whatsoe'er", "whatsoever"],
  ["whene'er", "whenever"],
  ["where'er", "wherever"],
  ["whereon", "whereupon"],
  ["wheresoe'er", "wheresoever"],
  ["whew", "phew"],
  ["whilst", "while"],
  ["whippletree", "whiffletree"],
  ["whitening", "whiting"],
  ["whoe'er", "whoever"],
  ["whortleberry", "bilberry"],
  ["whoso", "whoever"],
  ["windjammer", "windbreaker"],
  ["windmill", "pinwheel"],
  ["wingspan", "wingspread"],
  ["withal", "with"],
  ["withy", "withe"],
  ["wolfram", "tungsten"],
  ["womanlike", "womanly"],
  ["woollen", "woolen"],
  ["workwoman", "workingwoman"],
  ["wouldest", "wouldst"],
  ["wouldst", "would"],
  ["yon", "yonder"],
  ["zed", "zee"]
]);

export default { convert };
