// =========================================================================
// 1. LOS CATÁLOGOS DE JUEGOS FIJOS Y ESTRUCTURAS DE DATOS
// =========================================================================
const catalogoInicial = [
    { id: 1, title: "Red Dead Redemption", image: "ImgGames/red_dead_redemption.jpg", status: "completado", plataforma: ["PC"] },
    { id: 2, title: "Alone In The Dark", image: "ImgGames/alone_in_the_dark.jpg", status: "pendiente", plataforma: ["PC"] },
    { id: 3, title: "Luto", image: "ImgGames/luto.jpg", status: "pendiente", plataforma: ["PC"] },
    { id: 4, title: "The Lego Ninjago Movie Video game", image: "ImgGames/the_lego_ninjago_movie_video_game.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 5, title: "Spider-Man 2", image: "ImgGames/spider_man_2.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 6, title: "Detroit: Become Human", image: "ImgGames/detroit_become_human.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 7, title: "Grand Theft Auto IV", image: "ImgGames/grand_theft_auto_iv.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 8, title: "Grand Theft Auto IV: The Ballad of Gay Tony", image: "ImgGames/grand_theft_auto_iv_the_ballad_of_gay_tony.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 9, title: "Grand Theft Auto IV: The Lost and Damned", image: "ImgGames/grand_theft_auto_iv_the_lost_and_damned.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 10, title: "The Quarry", image: "ImgGames/the_quarry.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 11, title: "Red Dead Redemption 2", image: "ImgGames/RDR2.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 12, title: "Batman - The Telltale Series", image: "ImgGames/batman_the_telltale_series.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 13, title: "Batman Arkham Asylum", image: "ImgGames/Batman Arkham Asylum.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 14, title: "Batman Arkham City", image: "ImgGames/batman_arkham_city.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 15, title: "Batman Arkham Origins", image: "ImgGames/batman_arkham_origins.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 16, title: "Batman Arkham Knight", image: "ImgGames/batman_arkham_knight.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 17, title: "Batman The Enemy Within - the telltale series", image: "ImgGames/batman_the_enemy_within_the_telltale_series.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 18, title: "Hogwarts Legacy", image: "ImgGames/hogwarts_legacy.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 19, title: "LEGO Batman The Videogame", image: "ImgGames/lego_batman_the_videogame.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 20, title: "LEGO Batman 2 DC Super Heroes", image: "ImgGames/lego_batman_2_dc_super_heroes.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 21, title: "LEGO Batman 3 Beyond Gotham", image: "ImgGames/lego_batman_3_beyond_gotham.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 22, title: "Spider-Man Miles Morales", image: "ImgGames/spider_man_miles_morales.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 23, title: "Spider-Man Remastered", image: "ImgGames/spider_man_remastered.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 24, title: "Poppy Playtime", image: "ImgGames/poppy_playtime.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 25, title: "Ratchet & Clank Una Dimensión Aparte", image: "ImgGames/ratchet_clank_una_dimension_aparte.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 26, title: "STAR WARS Jedi La orden Caida", image: "ImgGames/star_wars_jedi_la_orden_caida.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 27, title: "The Walking Dead The Telltale Definitive Series", image: "ImgGames/the_walking_dead_the_telltale_definitive_series.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 28, title: "Stray", image: "ImgGames/stray.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 29, title: "Dispatch", image: "ImgGames/dispatch.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 30, title: "Beyond: two Souls", image: "ImgGames/beyond_two_souls.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 31, title: "Grand Theft Auto V", image: "ImgGames/grand_theft_auto_v.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 32, title: "Dead Island 2", image: "ImgGames/dead_island_2.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 33, title: "LEGO Star Wars: The Skywalker Saga", image: "ImgGames/lego_star_wars_the_skywalker_saga.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 34, title: "The Evil Within", image: "ImgGames/the_evil_within.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 35, title: "The Evil Within 2", image: "ImgGames/the_evil_within_2.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 36, title: "A plague tale: Innocence", image: "ImgGames/a_plague_tale_innocence.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 37, title: "Marvel Guardians of the Galaxy", image: "ImgGames/marvel_guardians_of_the_galaxy.jpg", status: "pendiente", plataforma: ["Epic Games"] },
    { id: 38, title: "Grand Theft Auto III", image: "ImgGames/grand_theft_auto_iii.jpg", status: "pendiente", plataforma: ["PlayStation 2", "Nintendo Switch 2"] },
    { id: 39, title: "Grand Theft Auto Vice City", image: "ImgGames/grand_theft_auto_vice_city.jpg", status: "pendiente", plataforma: ["PlayStation 2", "Nintendo Switch 2"] },
    { id: 40, title: "Grand Theft Auto San Andreas", image: "ImgGames/grand_theft_auto_san_andreas.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 41, title: "Donkey Kong Bananza", image: "ImgGames/donkey_kong_bananza.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 42, title: "Life is Strange True Colors", image: "ImgGames/life_is_strange_true_colors.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 43, title: "South Park Retaguardia en Peligro", image: "ImgGames/south_park_retaguardia_en_peligro.jpg", status: "completado", plataforma: ["Nintendo Switch 2"] },
    { id: 44, title: "South Park La Vara de la Verdad", image: "ImgGames/south_park_la_vara_de_la_verdad.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 45, title: "Grand Theft Auto VI", image: "ImgGames/grand_theft_auto_vi.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 46, title: "Wolverine", image: "ImgGames/wolverine.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 47, title: "Until Dawn", image: "ImgGames/until_dawn.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 48, title: "LEGO Batman: El Legado del Caballero Oscuro", image: "ImgGames/lego_batman_el_legado_del_caballero_oscuro.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 49, title: "Cyberpunk 2077", image: "ImgGames/cyberpunk_2077.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 50, title: "God of War Ragnarok", image: "ImgGames/god_of_war_ragnarok.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 51, title: "Leyendas Pokemon Z A", image: "ImgGames/leyendas_pokemon_z_a.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 52, title: "Resident Evil Requiem", image: "ImgGames/resident_evil_requiem.jpg", status: "noadquirido", plataforma: ["Steam"] },
    { id: 53, title: "LEGO DC Super-Villains", image: "ImgGames/lego-dc-super-villains.jpg", status: "noadquirido", plataforma: ["Steam"] },
    { id: 54, title: "God of War", image: "ImgGames/god_of_war.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 55, title: "Mario + Rabbids kingdom Battle", image: "ImgGames/mario_rabbids_kingdom_battle.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 56, title: "Silent Hill 2", image: "ImgGames/silent_hill_2.jpg", status: "pendiente", plataforma: ["PC"] },
    { id: 57, title: "Kirby y la tierra olvidada + El mundo astral", image: "ImgGames/kirby_y_la_tierra_olvidada.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] },
    { id: 58, title: "Astro Bot", image: "ImgGames/astro_bot.jpg", status: "noadquirido", plataforma: ["PlayStation 5"] },
    { id: 59, title: "Astro's Playroom", image: "ImgGames/astro_playroom.jpg", status: "pendiente", plataforma: ["PlayStation 5"] }
];

const catalogoOtros = [
    { id: 101, title: "Assetto Corsa", image: "ImgGameOther/assetto-corsa.jpg", plataforma: ["Steam"] },
    { id: 102, title: "Apex Legends", image: "ImgGameOther/apex-legends.jpg", plataforma: ["Steam"] },
    { id: 103, title: "Fortnite", image: "ImgGameOther/fortnite.jpg", plataforma: ["Epic Games", "Nintendo Switch 2", "PlayStation 5"] },
    { id: 104, title: "Cities: Skylines", image: "ImgGameOther/cityes skylines.jpg", plataforma: ["Steam"] },
    { id: 105, title: "The Crew Motorfest", image: "ImgGameOther/the-crew-motorfest.jpg", plataforma: ["Epic Games"] },
    { id: 106, title: "Rocket League", image: "ImgGameOther/rocket_league.jpg", plataforma: ["Epic Games"] },
    { id: 107, title: "FIFA 12", image: "ImgGameOther/fifa12.jpg", plataforma: ["PlayStation 2"] },
    { id: 108, title: "CARS 2", image: "ImgGameOther/cars2.jpg", plataforma: ["PlayStation 3"] },
    { id: 109, title: "WRC 7", image: "ImgGameOther/wrc7.jpg", plataforma: ["Steam"] },
    { id: 110, title: "Palworld", image: "ImgGameOther/palworld.jpg", plataforma: ["Steam"] },
    { id: 111, title: "FC 24", image: "ImgGameOther/fc24.jpg", plataforma: ["Steam"] },
    { id: 112, title: "Los Sims 4", image: "ImgGameOther/los_sims_4.jpg", plataforma: ["Epic Games"] },
    { id: 113, title: "FC 25", image: "ImgGameOther/fc25.jpg", plataforma: ["Steam"] },
    { id: 114, title: "FC 26", image: "ImgGameOther/fc26.jpg", plataforma: ["Steam"] },
    { id: 115, title: "Fall Guys", image: "ImgGameOther/fall_guys.jpg", plataforma: ["Epic Games", "Nintendo Switch 2"] },
    { id: 116, title: "Farming Simulator 22", image: "ImgGameOther/farming_simulator_22.jpg", plataforma: ["Epic Games"] },
    { id: 117, title: "Scritchy Scratchy", image: "ImgGameOther/scritchy_scratch.jpg", plataforma: ["Steam"] },
    { id: 118, title: "Supermarket Simulator", image: "ImgGameOther/super_simulator.jpg", plataforma: ["Steam"] },
    { id: 119, title: "The Crew 2", image: "ImgGameOther/the_crew_2.jpg", plataforma: ["Steam"] },
    { id: 120, title: "Fallout New Vegas", image: "ImgGameOther/fallout_new_vegas.jpg", plataforma: ["Epic Games"] },
    { id: 121, title: "Jurassic World Evolution 2", image: "ImgGameOther/Jurassic_world_evolution_2.jpg", plataforma: ["Epic Games"] },
    { id: 122, title: "PC Building Simulator", image: "ImgGameOther/pc_building_simulator.jpg", plataforma: ["Epic Games"] },
    { id: 123, title: "Call of Duty MW3", image: "ImgGameOther/call_of_duty_mw_3.jpg", plataforma: ["PlayStation 3"] },
    { id: 124, title: "Minecraft", image: "ImgGameOther/minecraft.jpg", plataforma: ["Nintendo Switch 2"] },
    { id: 125, title: "League of Legends", image: "ImgGameOther/league_of_legends.jpg", plataforma: ["Epic Games"] },
    { id: 126, title: "PUBG: BATTLEGROUNDS", image: "ImgGameOther/pubg_battelgrounds.jpg", plataforma: ["Epic Games"] },
    { id: 127, title: "Metro 2033 Redux", image: "ImgGameOther/metro_2033_redux.jpg", plataforma: ["Steam"] },
    { id: 128, title: "MECCHA CHAMELEON", image: "ImgGameOther/meccha_chameleon.jpg", plataforma: ["Steam"] },
    { id: 129, title: "Marvel Snap", image: "ImgGameOther/marvel_snap.jpg", plataforma: ["Steam"] },
    { id: 130, title: "Lethal Company", image: "ImgGameOther/lethal_company.jpg", plataforma: ["Steam"] },
    { id: 131, title: "MARIOKART WORLD", image: "ImgGameOther/mariokart_world.jpg", plataforma: ["Nintendo Switch 2"] },
    { id: 132, title: "The Hulk", image: "ImgGameOther/the_hulk.jpg", plataforma: ["PlayStation 2"] },
    { id: 133, title: "Leaf it Alone", image: "ImgGameOther/leaf_it_alone.jpg", plataforma: ["Steam"] },
    { id: 134, title: "Grand Theft Auto: Liberty City Stories", image: "ImgGameOther/gta_liberty_city_stories.jpg", plataforma: ["PlayStation 2"] },
    { id: 135, title: "Need for Speed PROSTREET", image: "ImgGameOther/need_for_speed_prostreet.jpg", plataforma: ["PlayStation 3"] },
    { id: 136, title: "Euro Truck Simulator 2", image: "ImgGameOther/euro_truck_simulator_2.jpg", plataforma: ["Steam"] },
    { id: 137, title: "Among Us", image: "ImgGameOther/among_us.jpg", plataforma: ["Steam"] },
    { id: 138, title: "Fallout 3", image: "ImgGameOther/fallout_3.jpg", plataforma: ["Epic Games"] },
    { id: 139, title: "Europa Universalis IV", image: "ImgGameOther/europa_universalis_iv.jpg", plataforma: ["Epic Games"] },
    { id: 140, title: "Bus Simulator 21 Next Stop", image: "ImgGameOther/bus_simulator_21_next_stop.jpg", plataforma: ["Epic Games"] },
    { id: 141, title: "F1 22", image: "ImgGameOther/f1_22.jpg", plataforma: ["Steam"] },
    { id: 142, title: "Only Up", image: "ImgGameOther/only_up.jpg", plataforma: ["PC"] },
    { id: 143, title: "Valorant", image: "ImgGameOther/valorant.jpg", plataforma: ["Epic Games"] },
    { id: 144, title: "Dmc Devil May Cry", image: "ImgGameOther/devil_may_cry.jpg", plataforma: ["Steam"] },
    { id: 145, title: "LEFT 4 DEAD 2", image: "ImgGameOther/left_4_dead_2.jpg", plataforma: ["Steam"] },
    { id: 146, title: "HOUSE FLIPPER", image: "ImgGameOther/hause_flipper.jpg", plataforma: ["Steam"] },
    { id: 147, title: "JAK 3", image: "ImgGameOther/jack_3.jpg", plataforma: ["PlayStation 2"] },
    { id: 148, title: "Shrek 2", image: "ImgGameOther/shrek2.jpg", plataforma: ["PlayStation 2"] },
    { id: 149, title: "Happy Feet", image: "ImgGameOther/happy feet.jpg", plataforma: ["PlayStation 2"] },
    { id: 150, title: "S.L.A.I Steel Lancer Arena International", image: "ImgGameOther/slai.jpg", plataforma: ["PlayStation 2"] },
    { id: 151, title: "Car Mechanic Simulator 2018", image: "ImgGameOther/car_mechanic_simulator_2018.jpg", plataforma: ["Steam"] },
    { id: 152, title: "The Deed", image: "ImgGameOther/the_deed.jpg", plataforma: ["Steam"] },
    { id: 153, title: "Godlike Burger", image: "ImgGameOther/godlike_burger.jpg", plataforma: ["Epic Games"] },
    { id: 154, title: "Guacamelee! 2", image: "ImgGameOther/guacamelee2.jpg", plataforma: ["Epic Games"] },
    { id: 155, title: "PAYDAY 2", image: "ImgGameOther/payday2.jpg", plataforma: ["Epic Games"] },
    { id: 156, title: "Destiny 2", image: "ImgGameOther/destiny2.jpg", plataforma: ["Epic Games"] },
    { id: 157, title: "DIABOTICAL", image: "ImgGameOther/diabotical.jpg", plataforma: ["Epic Games"] }
];

const misDispositivos = [
    { 
        id: 201, 
        title: "Mi PC Gamer", 
        categoria: "PC Master Race", 
        image: "ImgSetup/pc_gaming.jpg", 
        // 🟢 Corrección: Se arreglaron las comillas dobles internas en las pulgadas (27") para evitar un crash de sintaxis
        componentes: ["⚡ Gráfica: NVIDIA RTX 3060 12GB", "⚙️ Procesador: AMD Ryzen 5 3600", "⚙️ Placa Base: Gigabyte B550 AORUS", "💾 RAM: Corsair DDR4 16GB", "🚀 Almacenamiento: SSD NVMe 2TB", "🖥️ Monitor: MSI G2722\" 144Hz", "🖥️ Monitor 2: ACER VG270\" 60Hz"] 
    },
    { 
        id: 202, 
        title: "PlayStation 5 Slim", 
        categoria: "Consola Sobremesa", 
        image: "ImgSetup/ps5.jpg", 
        // 🟢 Corrección: Limpieza del texto roto en el mando Cosmic Red
        componentes: ["💿 Unidad de disco Blu-ray", "🚀 SSD NVMe 1TB Custom", "🎮 Mando: DualSense Cosmic Red"] 
    },
    { 
        id: 203, 
        title: "Nintendo Switch 2", 
        categoria: "Consola Portátil", 
        image: "ImgSetup/switch2.jpg", 
        componentes: ["📺 Pantalla: OLED 8 Pulgadas", "🎮 Mandos Joy-Con mejorados", "💾 256GB Almacenamiento"] 
    },
    { 
        id: 204, 
        title: "PlayStation 2 Slim", 
        categoria: "Retro", 
        image: "ImgSetup/ps2.jpg", 
        componentes: ["💾 MemoryCard 8MB"] 
    },
    { 
        id: 205, 
        title: "PlayStation 3 Slim", 
        categoria: "Retro", 
        image: "ImgSetup/ps3.jpg", 
        componentes: ["💾 Almacenamiento: 500GB"] 
    }
];

const misMapas = [
    { id: 301, title: "Los Santos - GTA V", image: "ImgMaps/gta5_map.jpg", juego: "Grand Theft Auto V" },
    { id: 302, title: "New Austin - RDR 2", image: "ImgMaps/rdr2_map.jpg", juego: "Red Dead Redemption 2" },
    { id: 303, title: "Hogwarts y Alrededores", image: "ImgMaps/hogwarts_map.jpg", juego: "Hogwarts Legacy" },
    { id: 304, title: "Liberty City - GTA IV", image: "ImgMaps/gta4_map.jpg", juego: "Grand Theft Auto IV" },
    { id: 305, title: "Estados Unidos - RDR", image: "ImgMaps/rdr_map.jpg", juego: "Red Dead Redemption" },
    { id: 306, title: "Vice City - GTA VC", image: "ImgMaps/gtavc_map.jpg", juego: "Grand Theft Auto Vice City" },
    { id: 307, title: "San Andreas - GTA SA", image: "ImgMaps/gtaSa_map.jpg", juego: "Grand Theft San Andreas" },
    { id: 308, title: "Liberty City - GTA III", image: "ImgMaps/gta3_map.jpg", juego: "Grand Theft Auto III" },
    { id: 309, title: "Manhattan - Spider-Man 2", image: "ImgMaps/spiderman2_amp.jpg", juego: "Spider-Man 2" },
    { id: 310, title: "Manhattan - Spider-Man 1 & MM", image: "ImgMaps/spiderman_amp.jpg", juego: "Spider-Man Remastered" }
];
// =========================================================================
// 2. CONFIGURACIÓN DEL SISTEMA
// =========================================================================
let coleccionActiva = 'principal';
let currentFilter = 'todos';
let searchText = '';
let currentPlatform = 'todas';
let favoritosPrincipal = JSON.parse(localStorage.getItem('mis_favoritos_principal')) || [];
let juegosPrincipal = JSON.parse(localStorage.getItem('mi_coleccion')) || catalogoInicial;
let juegosOtros = JSON.parse(localStorage.getItem('mis_otros_juegos')) || catalogoOtros;
let diasPlanificados = JSON.parse(localStorage.getItem('mis_dias_libres_juegos')) || {};
let games = juegosPrincipal;
const gamesGrid = document.getElementById('games-grid');
const IMAGEN_POR_DEFECTO = "defecto.jpg";

// =========================================================================
// 3. RENDERIZADO FLUIDO (SIN VOLTEO 3D INCÓMODO EN MÓVIL)
// =========================================================================
function renderCards() {
    if (!gamesGrid) return;
    gamesGrid.innerHTML = '';

    const filteredGames = games.filter(game => {
        let coincideFiltro = currentFilter === 'todos' ? true : (currentFilter === 'favoritos' ? favoritosPrincipal.includes(game.id) : game.status === currentFilter);
        const coincideBusqueda = game.title.toLowerCase().includes(searchText.toLowerCase());
        let coincidePlataforma = currentPlatform === 'todas' || (game.plataforma && game.plataforma.some(p => p === currentPlatform || (currentPlatform === "PlayStation 5" && p === "PS5")));
        return coincideFiltro && coincideBusqueda && coincidePlataforma;
    });

    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        let htmlLogos = '';
        if (game.plataforma) {
            game.plataforma.forEach(plat => {
                // 🟢 RESTAURADO: Comillas de plantilla aplicadas a las imágenes de los logos
                if (plat === "Steam") htmlLogos += `<img src="Logos/steam_logo.png" class="platform-icon" title="Steam">`;
                else if (plat === "PlayStation 5" || plat === "PS5") htmlLogos += `<img src="Logos/ps5_logo.png" class="platform-icon" title="PS5">`;
                else if (plat === "Nintendo Switch 2") htmlLogos += `<img src="Logos/switch_logo.png" class="platform-icon" title="Switch 2">`;
                else if (plat === "Epic Games") htmlLogos += `<img src="Logos/epic_logo.png" class="platform-icon" title="Epic">`;
                else if (plat === "PC") htmlLogos += `<img src="Logos/pc_logo.png" class="platform-icon" title="PC">`;
                else if (plat === "PlayStation 2") htmlLogos += `<img src="Logos/ps2_logo.png" class="platform-icon" title="PS2">`;
                else if (plat === "PlayStation 3") htmlLogos += `<img src="Logos/ps3_logo.png" class="platform-icon" title="PS3">`;
            });
        }

        let htmlEstrellas = '';
        if (coleccionActiva === 'principal' && game.status === 'completado') {
            const score = game.stars || 0;
            // 🟢 RESTAURADO: Comillas de plantilla en el bloque de estrellas
            htmlEstrellas = `<div class="stars-rating">`;
            for (let i = 1; i <= 5; i++) {
                htmlEstrellas += `<span class="star ${i <= score ? 'active' : ''}" onclick="rateGame(${game.id}, ${i})">★</span>`;
            }
            htmlEstrellas += `</div>`;
        }

        // 🟢 RESTAURADO: Comillas de plantilla en botones secundarios y menús dinámicos
        let htmlFavorito = coleccionActiva === 'principal' ? `<span class="fav-btn ${favoritosPrincipal.includes(game.id) ? 'active' : ''}" onclick="toggleFavorite(event, ${game.id})">♥</span>` : '';
        let htmlMenu = coleccionActiva === 'principal' ? `<select class="card-select status-${game.status}" onchange="changeStatus(${game.id}, this.value)"><option value="pendiente" ${game.status === 'pendiente' ? 'selected' : ''}>⏳ Por jugar</option><option value="jugando" ${game.status === 'jugando' ? 'selected' : ''}>🕹️ Jugando</option><option value="completado" ${game.status === 'completado' ? 'selected' : ''}>🏆 Completado</option><option value="noadquirido" ${game.status === 'noadquirido' ? 'selected' : ''}>🛑 No Adquirido</option></select>` : '';
        
        // 🟢 RESTAURADO: Comillas de plantilla para inyectar la estructura interna de la tarjeta de juego
        card.innerHTML = `${htmlFavorito}<div class="card-front"><img src="${game.image}" class="card-banner" onerror="this.src='${IMAGEN_POR_DEFECTO}'"></div><div class="card-back"><h3 class="card-title">${game.title}</h3><div class="platform-container">${htmlLogos}</div>${htmlEstrellas}${htmlMenu}</div>`;
        gamesGrid.appendChild(card);
    });

    actualizarEstadisticas();
}
// =========================================================================
// 1. CONTROLADORES DE FILTROS Y ESTADOS UNIFICADOS
// =========================================================================
window.changeCollection = function(tipo, elemento) {
    coleccionActiva = tipo;
    
    // Sincronizar clases activas en los botones de navegación
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (elemento) {
        elemento.classList.add('active');
    } else {
        const targetBtn = document.querySelector(`.nav-item[onclick*="${tipo}"]`);
        if (targetBtn) targetBtn.classList.add('active');
    }

    const topFilters = document.querySelector('.top-filters-container');
    const statsPanel = document.getElementById('stats-panel');
    const calendarContainer = document.getElementById('calendar-container');
    const gamesGridObj = document.getElementById('games-grid');
    const setupContainer = document.getElementById('setup-container');
    const mapasContainer = document.getElementById('mapas-container');
    
    // Resetear búsquedas al cambiar de sección
    const searchInput = document.getElementById('game-search');
    if (searchInput) searchInput.value = '';
    searchText = '';

    // Esconder todas las rejillas
    [gamesGridObj, calendarContainer, setupContainer, mapasContainer].forEach(el => { if(el) el.style.display = 'none'; });
    
    if (tipo === 'principal' || tipo === 'otros') {
        games = tipo === 'principal' ? juegosPrincipal : juegosOtros;
        if(gamesGridObj) gamesGridObj.style.display = 'grid';
        
        // 🟢 CORRECCIÓN: Mostrar los filtros y buscador solo si es 'principal'. 
        // Si es 'otros', ocultamos toda la barra de subfiltros para limpiar la vista.
        if (tipo === 'principal') {
            if(topFilters) topFilters.style.display = 'block';
            document.getElementById('sub-filters').style.display = 'flex'; // Muestra botones en Principal
            const mobileSub = document.getElementById('mobile-sub-filters');
            if(mobileSub) mobileSub.style.display = 'block';
            if(statsPanel) statsPanel.style.display = 'flex';
        } else {
            if(topFilters) topFilters.style.display = 'block';
            document.getElementById('sub-filters').style.display = 'none'; // 🟢 Oculta botones en Otros Juegos
            const mobileSub = document.getElementById('mobile-sub-filters');
            if(mobileSub) mobileSub.style.display = 'none';
            if(statsPanel) statsPanel.style.display = 'none';
        }

        renderCards();
    } else {
        if(topFilters) topFilters.style.display = 'none';
        if(statsPanel) statsPanel.style.display = 'none';
        if(tipo === 'calendario') { if(calendarContainer) calendarContainer.style.display = 'block'; renderCalendar(); }
        if(tipo === 'setup') { if(setupContainer) setupContainer.style.display = 'block'; renderSetup(); }
        if(tipo === 'mapas') { if(mapasContainer) mapasContainer.style.display = 'block'; renderMapas(); }
    }
};

// Vincula tanto los botones de PC como el desplegable móvil a la misma función core
window.filterGames = function(filterType, buttonElement) {
    currentFilter = filterType;
    if (buttonElement && buttonElement.parentElement) {
        buttonElement.parentElement.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
    }
    // Sincronizar el select móvil por si está visible
    const mobileSub = document.getElementById('mobile-sub-filters');
    if (mobileSub) mobileSub.value = filterType;
    renderCards();
};

window.filterGamesFromSelect = function(filterType) {
    currentFilter = filterType;
    // Sincronizar los botones de PC por si está en resolución intermedia
    const pcButtons = document.getElementById('sub-filters');
    if (pcButtons) {
        pcButtons.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = pcButtons.querySelector(`.filter-btn[onclick*="${filterType}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }
    renderCards();
};

window.filterByPlatform = function(plataforma, elemento) {
    currentPlatform = plataforma;
    document.querySelectorAll('.sidebar-plat-btn').forEach(btn => btn.classList.remove('active'));
    if (elemento) elemento.classList.add('active');
    renderCards();
};

window.changeStatus = function(id, newStatus) {
    juegosPrincipal = juegosPrincipal.map(game => game.id === id ? { ...game, status: newStatus } : game);
    localStorage.setItem('mi_coleccion', JSON.stringify(juegosPrincipal));
    renderCards();
};

window.rateGame = function(id, stars) {
    juegosPrincipal = juegosPrincipal.map(g => g.id === id ? { ...g, stars: Math.trunc(stars) } : g);
    localStorage.setItem('mi_coleccion', JSON.stringify(juegosPrincipal));
    renderCards();
};

window.searchGames = function() {
    const searchInput = document.getElementById('game-search');
    if (searchInput) { searchText = searchInput.value; renderCards(); }
};

window.toggleFavorite = function(event, id) {
    event.stopPropagation();
    const index = favoritosPrincipal.indexOf(id);
    if (index === -1) favoritosPrincipal.push(id); else favoritosPrincipal.splice(index, 1);
    localStorage.setItem('mis_favoritos_principal', JSON.stringify(favoritesPrincipal));
    renderCards();
};

function actualizarEstadisticas() {
    const total = juegosPrincipal.length;
    const p = juegosPrincipal.filter(g => g.status === 'pendiente').length;
    const j = juegosPrincipal.filter(g => g.status === 'jugando').length;
    const c = juegosPrincipal.filter(g => g.status === 'completado').length;
    const totalAdq = p + j + c;
    const por = totalAdq > 0 ? Math.round((c / totalAdq) * 100) : 0;
    
    if(document.getElementById('count-todos')) document.getElementById('count-todos').innerText = total;
    if(document.getElementById('count-pendiente')) document.getElementById('count-pendiente').innerText = p;
    if(document.getElementById('count-jugando')) document.getElementById('count-jugando').innerText = j;
    if(document.getElementById('count-completado')) document.getElementById('count-completado').innerText = c;
    // 🟢 RESTAURADO: Comillas invertidas para la inyección de texto dinámica
    if(document.getElementById('progress-percent')) document.getElementById('progress-percent').innerText = `Progreso: ${por}%`;
    
    const bar = document.getElementById('progress-bar-fill');
    if (bar) bar.style.width = por + "%";
}

function renderCalendar() {
    const grid = document.getElementById('calendar-days-grid');
    const title = document.getElementById('calendar-month-title');
    if (!grid || !title) return;
    grid.innerHTML = '';
    
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // 🟢 RESTAURADO: Comillas invertidas para el título dinámico del calendario
    title.innerText = `📅 Agenda: ${months[m]} ${y}`;
    
    let startDay = new Date(y, m, 1).getDay();
    let margin = startDay === 0 ? 6 : startDay - 1;
    for (let i = 0; i < margin; i++) {
        const cell = document.createElement('div'); 
        cell.className = 'calendar-day empty-day'; 
        grid.appendChild(cell);
    }
    const days = new Date(y, m + 1, 0).getDate();
    // 🟢 RESTAURADO: Backticks en la opción por defecto del calendario
    let opts = `<option value="">Ocupado 🛑</option>`;
    
    [...juegosPrincipal].sort((a,b)=>a.title.localeCompare(b.title)).forEach(g => { 
        // 🟢 RESTAURADO: Backticks en las opciones del selector de juegos mapeados
        opts += `<option value="${g.title}">${g.title}</option>`; 
    });
    
    for (let d = 1; d <= days; d++) {
        const cell = document.createElement('div');
        // 🟢 RESTAURADO: Backticks en la clave de fecha única de persistencia
        const key = `${y}-${m}-${d}`;
        const gameSet = diasPlanificados[key] || "";
        
        cell.className = gameSet !== "" ? 'calendar-day free-to-play' : 'calendar-day';
        // 🟢 RESTAURADO: Backticks en el marcado HTML de la celda de cada día
        cell.innerHTML = `<span>${d}</span>${gameSet !== "" ? `<span style="color:#00ff99;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">🕹️ ${gameSet}</span>` : ''}<select class="calendar-select-game" onchange="planificarJuego('${key}', this.value)">${opts.replace(`value="${gameSet}"`, `value="${gameSet}" selected`)}</select>`;
        grid.appendChild(cell);
    }
}

window.planificarJuego = function(key, val) {
    if (val === "") delete diasPlanificados[key]; else diasPlanificados[key] = val;
    localStorage.setItem('mis_dias_libres_juegos', JSON.stringify(diasPlanificados));
    renderCalendar();
};

function renderSetup() {
    const grid = document.getElementById('setup-grid'); 
    if (!grid) return; 
    grid.innerHTML = '';
    
    // 🟢 CORRECCIÓN: Forzar que el contenedor use la rejilla CSS adaptativa
    grid.className = 'games-grid';
    
    misDispositivos.forEach(d => {
        const card = document.createElement('div'); 
        card.className = 'game-card';
        let comps = d.componentes.map(c => `<li style="font-size:11px;color:#ccc;text-align:left;">${c}</li>`).join('');
        card.innerHTML = `<div class="card-front"><img src="${d.image}" class="card-banner"></div><div class="card-back"><h3 class="card-title">${d.title}</h3><ul style="padding-left:15px;margin:5px 0;">${comps}</ul></div>`;
        grid.appendChild(card);
    });
}

function renderMapas() {
    const grid = document.getElementById('mapas-grid'); 
    if (!grid) return; 
    grid.innerHTML = '';
    
    // 🟢 CORRECCIÓN: Forzar que el contenedor use la rejilla CSS adaptativa
    grid.className = 'games-grid';
    
    misMapas.forEach(m => {
        const card = document.createElement('div'); 
        card.className = 'game-card'; 
        card.style.cursor = 'pointer'; 
        card.onclick = () => abrirMapa(m.image);
        card.innerHTML = `<div class="card-front"><img src="${m.image}" class="card-banner"></div><div class="card-back"><h3 class="card-title">${m.title}</h3><span style="font-size:10px;color:#666;text-align:center;">🔍 Ampliar</span></div>`;
        grid.appendChild(card);
    });
}

function abrirMapa(img) { 
    const m = document.getElementById('mapa-modal'); 
    const i = document.getElementById('mapa-gigante'); 
    if(m && i){ i.src = img; m.style.display = 'flex'; } 
}

window.cerrarMapa = function() { 
    const m = document.getElementById('mapa-modal'); 
    if(m) m.style.display = 'none'; 
};

// Inicialización de la vista por defecto al arrancar
renderCards();
