// 1. LOS CATÁLOGOS DE JUEGOS FIJOS DE TU WEB
const catalogoInicial = [
    { id: 1, title: "Red Dead Redemption", image: "ImgGames/red_dead_redemption.jpg", status: "completado", plataforma: ["PC"] },
    { id: 2, title: "Alone In The Dark", image: "ImgGames/alone_in_the_dark.jpg", status: "pendiente", plataforma: ["PC"] },
    { id: 3, title: "Luto", image: "ImgGames/luto.jpg", status: "pendiente", plataforma: ["PC"] },
    { id: 4, title: "The Lego Ninjago Movie Video game", image: "ImgGames/the_lego_ninjago_movie_video_game.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 5, title: "Spider-Man 2", image: "ImgGames/spider_man_2.jpg", status: "completado", plataforma: ["Steam"] },
    { id: 6, title: "Detroit: Become Human", image: "ImgGames/detroit_become_human.jpg", status: "jugando", plataforma: ["Steam"] },
    { id: 7, title: "Grand Theft Auto IV", image: "ImgGames/grand_theft_auto_iv.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 8, title: "Grand Theft Auto IV: The Ballad of Gay Tony", image: "ImgGames/grand_theft_auto_iv_the_ballad_of_gay_tony.jpg", status: "pendiente", plataforma: ["Steam"] },
    { id: 9, title: "Grand Theft Auto IV: The Lost and Damned", image: "ImgGames/grand_theft_auto_iv_the_lost_and_damned.jpg", status: "pendiente", plataforma: ["Steam"] },
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
    { id: 57, title: "Kirby y la tierra olvidada + El mundo astral", image: "ImgGames/kirby_y_la_tierra_olvidada.jpg", status: "pendiente", plataforma: ["Nintendo Switch 2"] }
];

const catalogoOtros = [
    { id: 101, title: "Assetto Corsa", image: "ImgGameOther/assetto-corsa.jpg", plataforma: ["Steam"] },
    { id: 102, title: "Apex Legends", image: "ImgGameOther/apex-legends.jpg", plataforma: ["Steam"] },
    { id: 103, title: "Fortnite", image: "ImgGameOther/fortnite.jpg", plataforma: ["Epic Games", "Nintendo Switch 2"] },
    { id: 104, title: "Cityes: Skylines", image: "ImgGameOther/cityes skylines.jpg", plataforma: ["Steam"] },
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
    { id: 121, title: "Jurassic Worls Evolution 2", image: "ImgGameOther/Jurassic_world_evolution_2.jpg", plataforma: ["Epic Games"] },
    { id: 122, title: "PC Building Simulator", image: "ImgGameOther/pc_building_simulator.jpg", plataforma: ["Epic Games"] },
    { id: 123, title: "Call of Duy MW3", image: "ImgGameOther/call_of_duty_mw_3.jpg", plataforma: ["PlayStation 3"] },
    { id: 124, title: "Minecraft", image: "ImgGameOther/minecraft.jpg", plataforma: ["Nintendo Switch 2"] },
    { id: 125, title: "League of Legends", image: "ImgGameOther/league_of_legends.jpg", plataforma: ["Epic Games"] },
    { id: 126, title: "PUBG: BATTELGROUNDS", image: "ImgGameOther/pubg_battelgrounds.jpg", plataforma: ["Epic Games"] },
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
    { id: 147, title: "JACK 3", image: "ImgGameOther/jack_3.jpg", plataforma: ["PlayStation 2"] },
    { id: 148, title: "Shrek 2", image: "ImgGameOther/shrek2.jpg", plataforma: ["PlayStation 2"] },
    { id: 149, title: "Happy Feet", image: "ImgGameOther/happy feet.jpg", plataforma: ["PlayStation 2"] },
    { id: 150, title: "S.L.A.I Steel Lancer Arena International", image: "ImgGameOther/slai.jpg", plataforma: ["PlayStation 2"] },
    { id: 151, title: "Car Mechanic Simulator 2018", image: "ImgGameOther/car_mechanic_simulator_2018.jpg", plataforma: ["Steam"] },
    { id: 152, title: "The Deed", image: "ImgGameOther/the_deed.jpg", plataforma: ["Steam"] },
    { id: 153, title: "Godlike Burger", image: "ImgGameOther/godlike_burger.jpg", plataforma: ["Epic Games"] }, 
    { id: 154, title: "Guacamelee! 2", image: "ImgGameOther/guacamelee2.jpg", plataforma: ["Epic Games"] },
    { id: 155, title: "PAYDAY 2", image: "ImgGameOther/payday2.jpg", plataforma: ["Epic Games"] },
    { id: 156, title: "Dastiny 2", image: "ImgGameOther/destiny2.jpg", plataforma: ["Epic Games"] },
    { id: 157, title: "DIABOTICAL", image: "ImgGameOther/diabotical.jpg", plataforma: ["Epic Games"] },
];

// Variables globales de control
let coleccionActiva = 'principal';
let currentFilter = 'todos';
let searchText = '';
let currentPlatform = 'todas'; // Almacena el logo de consola seleccionado
// Carga los favoritos guardados o inicializa un array vacío si no hay ninguno
let favoritosPrincipal = JSON.parse(localStorage.getItem('mis_favoritos_principal')) || [];


// Cargamos listas desde memoria de forma independiente
let juegosPrincipal = JSON.parse(localStorage.getItem('mi_coleccion')) || catalogoInicial;
let juegosOtros = JSON.parse(localStorage.getItem('mis_otros_juegos')) || catalogoOtros;

if (!localStorage.getItem('mis_dias_libres_juegos')) {
    localStorage.setItem('mis_dias_libres_juegos', JSON.stringify({}));
}
let diasPlanificados = JSON.parse(localStorage.getItem('mis_dias_libres_juegos')) || {};
let games = juegosPrincipal;

const gamesGrid = document.getElementById('games-grid');
const IMAGEN_POR_DEFECTO = "defecto.jpg";

// 2. FUNCIÓN PARA MOSTRAR LAS TARJETAS EN PANTALLA (CON FILTRO DE PLATAFORMA INTEGRADO)
function renderCards() {
    if (!gamesGrid) return;
    gamesGrid.innerHTML = '';
    
    const filteredGames = games.filter(game => {
    // 🔑 ACTUALIZADO: Comprueba si el filtro es 'favoritos' y si el juego está en el array de favoritos
    let coincideFiltro = false;
    if (currentFilter === 'todos') {
        coincideFiltro = true;
    } else if (currentFilter === 'favoritos') {
        coincideFiltro = favoritosPrincipal.includes(game.id);
    } else {
        coincideFiltro = game.status === currentFilter;
    }

    const coincideBusqueda = game.title.toLowerCase().includes(searchText.toLowerCase());
    
    let coincidePlataforma = currentPlatform === 'todas';
    if (!coincidePlataforma && game.plataforma && Array.isArray(game.plataforma)) {
        coincidePlataforma = game.plataforma.some(plat => {
            if (currentPlatform === "PlayStation 5") {
                return plat === "PlayStation 5" || plat === "PS5";
            }
            return plat === currentPlatform;
        });
    }
    
    return coincideFiltro && coincideBusqueda && coincidePlataforma;
});

    
    filteredGames.forEach(game => {
        const card = document.createElement('div');
        
        if (coleccionActiva === 'principal') {
            card.className = `game-card has-${game.status}`;
        } else {
            card.className = 'game-card';
        }

        let htmlLogos = '';
        if (game.plataforma && Array.isArray(game.plataforma)) {
            game.plataforma.forEach(plat => {
                if (plat === "Steam") htmlLogos += `<img src="Logos/steam_logo.png" class="platform-icon" title="Steam">`;
                else if (plat === "PlayStation 5" || plat === "PS5") htmlLogos += `<img src="Logos/ps5_logo.png" class="platform-icon" title="PlayStation 5">`;
                else if (plat === "Nintendo Switch 2") htmlLogos += `<img src="Logos/switch_logo.png" class="platform-icon" title="Nintendo Switch 2">`;
                else if (plat === "Epic Games") htmlLogos += `<img src="Logos/epic_logo.png" class="platform-icon" title="Epic Games">`;
                else if (plat === "PC") htmlLogos += `<img src="Logos/pc_logo.png" class="platform-icon" title="PC (Windows)">`;
                else if (plat === "PlayStation 2") htmlLogos += `<img src="Logos/ps2_logo.png" class="platform-icon" title="PlayStation 2">`;
                else if (plat === "PlayStation 3") htmlLogos += `<img src="Logos/ps3_logo.png" class="platform-icon" title="PlayStation 3">`;
            });
        }

        if (htmlLogos === '') {
            htmlLogos = `<span style="font-size:12px; color:#aaa;">Desconocida</span>`;
        }

        let htmlEstrellas = '';
        if (coleccionActiva === 'principal' && game.status === 'completado') {
            const puntuacion = game.stars || 0;
            htmlEstrellas = `<div class="stars-rating">`;
            for (let i = 1; i <= 5; i++) {
                const claseEstrella = i <= puntuacion ? 'star active' : 'star';
                htmlEstrellas += `<span class="${claseEstrella}" onclick="rateGame(${game.id}, ${i})">★</span>`;
            }
            htmlEstrellas += `</div>`;
        }

        // 🔑 NUEVO: Añadir botón de favoritos solo para la colección principal
        let htmlFavoritoOpcional = '';
        if (coleccionActiva === 'principal') {
            const esFavorito = favoritosPrincipal.includes(game.id);
            const claseFav = esFavorito ? 'fav-btn active' : 'fav-btn';
            htmlFavoritoOpcional = `<span class="${claseFav}" onclick="toggleFavorite(event, ${game.id})">♥</span>`;
        }

        let htmlHorasOpcional = '';
        let htmlMenuOpcional = '';
        
        if (coleccionActiva === 'principal') {
            htmlMenuOpcional = `
                <select class="card-select status-${game.status}" onchange="changeStatus(${game.id}, this.value)">
                    <option value="pendiente" ${game.status === 'pendiente' ? 'selected' : ''}>Por jugar ⏳</option>
                    <option value="jugando" ${game.status === 'jugando' ? 'selected' : ''}>Jugando 🕹️</option>
                    <option value="completado" ${game.status === 'completado' ? 'selected' : ''}>🏆 Completado</option>
                    <option value="noadquirido" ${game.status === 'noadquirido' ? 'selected' : ''}>No Adquirido 🛑</option>
                </select>
            `;
        }

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${game.image}" alt="${game.title}" class="card-banner" onerror="this.src='${IMAGEN_POR_DEFECTO}'">
                </div>
                <div class="card-back">
                    ${htmlFavoritoOpcional}
                    <h3 class="card-title">${game.title}</h3>
                    <div class="platform-container">${htmlLogos}</div>
                    ${htmlEstrellas}
                    ${htmlHorasOpcional}
                    ${htmlMenuOpcional}
                </div>
            </div>
        `;
        gamesGrid.appendChild(card);
    });
    
    actualizarEstadisticas();
}

// 3. CAMBIAR DE SECCIÓN SUPERIOR (CORREGIDO PARA RESETEAR FILTROS AL CAMBIAR)
window.changeCollection = function(tipo, elemento) {
    coleccionActiva = tipo;
    
    document.querySelectorAll('.collection-btn').forEach(btn => btn.classList.remove('active'));
    elemento.classList.add('active');
    
    const subFilters = document.getElementById('sub-filters');
    const statsPanel = document.getElementById('stats-panel');
    const calendarContainer = document.getElementById('calendar-container');
    const gamesGridObj = document.getElementById('games-grid');
    const searchContainer = document.querySelector('.search-container');
    const sidebarPlat = document.querySelector('.sidebar-platforms');
    
    // A) Reseteamos siempre el cuadro gris del buscador por texto
    const searchInput = document.getElementById('game-search');
    if (searchInput) searchInput.value = '';
    searchText = '';
    
    // B) Reseteamos siempre la barra lateral izquierda de consolas para que vuelva a "Todas"
    currentPlatform = 'todas';
    document.querySelectorAll('.sidebar-plat-btn').forEach(b => b.classList.remove('active'));
    const btnAllPlat = document.querySelector('.sidebar-plat-btn[onclick*="todas"]');
    if (btnAllPlat) btnAllPlat.classList.add('active');

    // 🔑 C) ¡EL TRUCO: Reseteamos los botones circulares inferiores de estado para que vuelvan a "Todos"!
    currentFilter = 'todos';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const btnAllFilter = document.querySelector('.filter-btn[onclick*="todos"]');
    if (btnAllFilter) btnAllFilter.classList.add('active');

    // Ahora aplicamos los cambios de visibilidad según la pestaña pulsada
    if (tipo === 'principal') {
        games = juegosPrincipal;
        if (subFilters) subFilters.style.display = 'flex';
        if (statsPanel) statsPanel.style.display = 'flex';
        if (searchContainer) searchContainer.style.display = 'flex';
        if (gamesGridObj) gamesGridObj.style.display = 'grid';
        if (calendarContainer) calendarContainer.style.display = 'none';
        if (sidebarPlat) sidebarPlat.style.display = 'flex';
        renderCards();
    } else if (tipo === 'otros') {
        games = juegosOtros;
        if (subFilters) subFilters.style.display = 'none';
        if (statsPanel) statsPanel.style.display = 'none';
        if (searchContainer) searchContainer.style.display = 'flex';
        if (gamesGridObj) gamesGridObj.style.display = 'grid';
        if (calendarContainer) calendarContainer.style.display = 'none';
        if (sidebarPlat) sidebarPlat.style.display = 'flex';
        renderCards();
    } else if (tipo === 'calendario') {
        if (subFilters) subFilters.style.display = 'none';
        if (statsPanel) statsPanel.style.display = 'none';
        if (searchContainer) searchContainer.style.display = 'none';
        if (gamesGridObj) gamesGridObj.style.display = 'none';
        if (calendarContainer) calendarContainer.style.display = 'block';
        if (sidebarPlat) sidebarPlat.style.display = 'none';
        renderCalendar();
    }
};

// NUEVA FUNCIÓN: ACCIÓN DEL FILTRO FLOTANTE LATERAL
window.filterByPlatform = function(plataforma, elemento) {
    currentPlatform = plataforma;
    
    document.querySelectorAll('.sidebar-plat-btn').forEach(btn => btn.classList.remove('active'));
    if (elemento) elemento.classList.add('active');
    
    renderCards();
};

// 4. FUNCIONES DE PERSISTENCIA Y CAMBIOS DE ESTADO
window.changeStatus = function(id, newStatus) {
    games = games.map(game => {
        if (game.id === id) return { ...game, status: newStatus };
        return game;
    });
    
    if (coleccionActiva === 'principal') {
        juegosPrincipal = games;
        localStorage.setItem('mi_coleccion_final', JSON.stringify(juegosPrincipal));
    } else {
        juegosOtros = games;
        localStorage.setItem('mis_otros_juegos', JSON.stringify(juegosOtros));
    }
    renderCards();
};

window.rateGame = function(id, numeroEstrellas) {
    games = games.map(game => {
        if (game.id === id) return { ...game, stars: Math.trunc(numeroEstrellas) };
        return game;
    });
    juegosPrincipal = games;
    localStorage.setItem('mi_coleccion_final', JSON.stringify(juegosPrincipal));
    renderCards();
};

window.searchGames = function() {
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchText = searchInput.value;
        renderCards();
    }
};

function filterGames(filterType, buttonElement) {
    // 1. Actualiza la variable del filtro actual
    currentFilter = filterType;
    
    // 2. Busca todos los botones de filtro en ese contenedor y quítales la clase 'active'
    const botones = buttonElement.parentElement.querySelectorAll('.filter-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    
    // 3. Añádele la clase 'active' solo al botón que acabas de pulsar
    buttonElement.classList.add('active');
    
    // 4. Vuelve a renderizar tus tarjetas para aplicar el filtro
    renderCards();
}

function actualizarEstadisticas() {
    // 1. Contamos los juegos filtrando según su estado real en la lista de Mi Colección
    const total = juegosPrincipal.length;
    const pendientes = juegosPrincipal.filter(g => g.status === 'pendiente').length;
    const jugando = juegosPrincipal.filter(g => g.status === 'jugando').length;
    const completados = juegosPrincipal.filter(g => g.status === 'completado').length;
    
    // 2. Calculamos el porcentaje matemático
    const totalAdquiridos = pendientes + jugando + completados;
    const porcentaje = totalAdquiridos > 0 ? Math.round((completados / totalAdquiridos) * 100) : 0;
    
    // 3. Inyectamos los números calculados en las cajas del HTML
    if(document.getElementById('count-todos')) document.getElementById('count-todos').innerText = total;
    if(document.getElementById('count-pendiente')) document.getElementById('count-pendiente').innerText = pendientes;
    if(document.getElementById('count-jugando')) document.getElementById('count-jugando').innerText = jugando;
    if(document.getElementById('count-completado')) document.getElementById('count-completado').innerText = completados;
    if(document.getElementById('progress-percent')) document.getElementById('progress-percent').innerText = porcentaje + "%";

    // 🔑 NUEVO: Ajustamos el ancho de la línea de carga verde automáticamente
    const barraRelleno = document.getElementById('progress-bar-fill');
    if (barraRelleno) {
        barraRelleno.style.width = porcentaje + "%";
    }
}

// 5. LÓGICA DEL PLANIFICADOR DE CALENDARIO INTERACTIVO
function renderCalendar() {
    const gridDias = document.getElementById('calendar-days-grid');
    const tituloMes = document.getElementById('calendar-month-title');
    if (!gridDias || !tituloMes) return;
    
    gridDias.innerHTML = '';
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth();
    const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // 🔑 CORREGIDO: Añadidas comillas invertidas a la plantilla de texto
    tituloMes.innerText = `📅 Planificador: ${nombresMeses[mes]} ${año}`;
    
    let primerDiaSemana = new Date(año, mes, 1).getDay();
    let diasDeMargen = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;
    
    for (let i = 0; i < diasDeMargen; i++) {
        const celdaVacia = document.createElement('div');
        celdaVacia.className = 'calendar-day empty-day';
        gridDias.appendChild(celdaVacia);
    }
    
    const totalDiasMes = new Date(año, mes + 1, 0).getDate();
    const juegosOrdenados = [...juegosPrincipal].sort((a, b) => a.title.localeCompare(b.title));
    
    // 🔑 CORREGIDO: Añadidas comillas invertidas
    let htmlOpcionesJuegos = `<option value="">Ocupado 🛑</option>`;
    juegosOrdenados.forEach(juego => {
        // 🔑 CORREGIDO: Añadidas comillas invertidas
        htmlOpcionesJuegos += `<option value="${juego.title}">${juego.title}</option>`;
    });
    
    for (let dia = 1; dia <= totalDiasMes; dia++) {
        const celdaDia = document.createElement('div');
        // 🔑 CORREGIDO: Añadidas comillas invertidas
        const fechaClave = `${año}-${mes}-${dia}`;
        const juegoAsignado = diasPlanificados[fechaClave] || "";
        
        if (juegoAsignado !== "") {
            celdaDia.className = 'calendar-day free-to-play';
            // 🔑 CORREGIDO: Añadidas comillas invertidas
            celdaDia.innerHTML = `<span class="day-number">${dia}</span> <span class="day-status-game">🕹️ ${juegoAsignado}</span> <select class="calendar-select-game" onchange="planificarJuego('${fechaClave}', this.value)"> ${generarOpcionesConSeleccionado(htmlOpcionesJuegos, juegoAsignado)} </select>`;
        } else {
            celdaDia.className = 'calendar-day';
            // 🔑 CORREGIDO: Añadidas comillas invertidas
            celdaDia.innerHTML = `<span class="day-number">${dia}</span> <span class="day-status">Ocupado 🛑</span> <select class="calendar-select-game" onchange="planificarJuego('${fechaClave}', this.value)"> ${htmlOpcionesJuegos} </select>`;
        }
        gridDias.appendChild(celdaDia);
    }
}

function generarOpcionesConSeleccionado(htmlBase, juegoSeleccionado) {
    // 🔑 CORREGIDO: Añadidas comillas invertidas
    return htmlBase.replace(`value="${juegoSeleccionado}"`, `value="${juegoSeleccionado}" selected`);
}

window.planificarJuego = function(fechaClave, juegoElegido) {
    if (juegoElegido === "") {
        delete diasPlanificados[fechaClave];
    } else {
        diasPlanificados[fechaClave] = juegoElegido;
    }
    localStorage.setItem('mis_dias_libres_juegos', JSON.stringify(diasPlanificados));
    renderCalendar();
};

// NUEVA FUNCIÓN: ACCIÓN DEL FILTRO FLOTANTE LATERAL
window.filterByPlatform = function(plataforma, elemento) {
    currentPlatform = plataforma;
    
    // Cambiamos el círculo verde neón al logotipo seleccionado
    document.querySelectorAll('.sidebar-plat-btn').forEach(btn => btn.classList.remove('active'));
    if (elemento) elemento.classList.add('active');
    
    renderCards(); // Redibuja la cuadrícula filtrada al instante
};

// Nueva función para agregar/quitar de favoritos con persistencia
window.toggleFavorite = function(event, id) {
    event.stopPropagation(); // Evita conflictos con giros raros de tarjeta
    
    const index = favoritosPrincipal.indexOf(id);
    if (index === -1) {
        favoritosPrincipal.push(id); // Añade si no estaba
    } else {
        favoritosPrincipal.splice(index, 1); // Quita si ya estaba
    }
    
    // Guarda el array actualizado en localStorage
    localStorage.setItem('mis_favoritos_principal', JSON.stringify(favoritosPrincipal));
    
    // Redibuja las tarjetas para actualizar el color del corazón
    renderCards();
};


// Arrancar la web
renderCards();
