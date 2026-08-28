/* =====================================================
   TRUNAL QR - TEMPLATE 02
   SKY EDITION
   FULL SCRIPT
===================================================== */


/* =====================================================
   DỮ LIỆU KHÁCH HÀNG
===================================================== */

const couple = {

    boyName: "Tên Nam",

    girlName: "Tên Nữ",

    startDate: "2025-08-20T00:00:00",

    startDateText: "20.08.2025"

};


/* =====================================================
   ALBUM
   MUỐN THÊM ẢNH CHỈ CẦN THÊM OBJECT Ở ĐÂY
===================================================== */

const albumData = [

    {
        image: "Tru (1).jpg",
        title: "Khoảnh khắc đầu tiên",
        description: "Một ngày chúng ta sẽ nhớ mãi."
    },

    {
        image: "Tru (2).jpg",
        title: "Một ngày bình thường",
        description: "Nhưng có em nên chẳng còn bình thường."
    },

    {
        image: "Tru (3).jpg",
        title: "Cùng nhau",
        description: "Thêm một chút ký ức vào bầu trời."
    },

    {
        image: "Tru (4).jpg",
        title: "Một khoảnh khắc",
        description: "Lưu lại để sau này cùng nhìn lại."
    },

    {
        image: "Tru (5).jpg",
        title: "Ngày hôm ấy",
        description: "Một trong những ngày thật đẹp."
    },

    {
        image: "Tru (6).jpg",
        title: "Chúng ta",
        description: "Vẫn đang viết tiếp câu chuyện."
    },
    {
        image: "Tru (7).jpg",
        title: "Ngày hôm ấy",
        description: "Một trong những ngày thật đẹp."
    },
    {
        image: "Tru (8).jpg",
        title: "Ngày hôm ấy",
        description: "Một trong những ngày thật đẹp."
    },
    {
        image: "Tru (9).jpg",
        title: "Ngày hôm ấy",
        description: "Một trong những ngày thật đẹp."
    },
    {
        image: "Tru (10).jpg",
        title: "Ngày hôm ấy",
        description: "Một trong những ngày thật đẹp."
    },

];


/* =====================================================
   KỶ NIỆM
===================================================== */

const memories = [

    {
        date: "20.08.2025",

        title: "Ngày chúng ta gặp nhau",

        image: "Tru (11).jpg",

        text:
            "Một ngày tưởng như bình thường, " +
            "nhưng lại trở thành ngày mở đầu cho một câu chuyện rất đặc biệt."
    },

    {
        date: "05.09.2025",

        title: "Ngày bắt đầu yêu",

        image: "Tru (12).jpg",

        text:
            "Từ ngày đó, hai người không còn đi qua những ngày tháng một mình nữa."
    },

    {
        date: "20.08.2026",

        title: "Một năm bên nhau",

        image: "Tru (13).jpg",

        text:
            "Một năm không quá dài, nhưng đủ để có thật nhiều câu chuyện được cất giữ."
    },
    {
        date: "20.08.2025",

        title: "Valentine",

        image: "Tru (14).jpg",

        text:
            "Quá hạnh phúc, " +
            "tuyệt vời luôn"
    },
    {
        date: "20.08.2025",

        title: "Giáng sinh",

        image: "Tru (15).jpg",

        text:
            "Một ngày tưởng như bình thường, " +
            "vui rất đặc biệt."
    },



];


/* =====================================================
   PLAYLIST
===================================================== */

const songs = [

    {
        title: "Wrong Times",

        artist: "Dangrangto and puppy",

        audio: "song (1).mp3",

        image: "song (1).jpg"
    },

    {
        title: "Love is",

        artist: "Dangrangto and Emily",

        audio: "song (2).mp3",

        image: "song (2).jpg"
    },

    {
        title: "Tìm Em",

        artist: "Hngle and Bảo Anh",

        audio: "song (3).mp3",

        image: "song (3).jpg"
    },
     {
        title: "Đang yêu",

        artist: "Low G (ft. JustaTee)",

        audio: "song (4).mp3",

        image: "song (4).jpg"
    },
     {
        title: "Từng Ngày Yêu Em",

        artist: "Buitruonglinh",

        audio: "song (5).mp3",

        image: "song (5).jpg"
    }

];


/* =====================================================
   LỜI NHẮN
===================================================== */

const letters = {

    boy: {

        title: "Dành cho em",

        text:
            "Cảm ơn em vì đã xuất hiện trong cuộc đời anh." +
            "<br><br>" +
            "Có thể anh không phải là người giỏi nói những lời ngọt ngào, " +
            "nhưng những điều anh trân trọng nhất đều muốn giữ lại ở đây."

    },

    girl: {

        title: "Dành cho anh",

        text:
            "Nếu một ngày chúng ta cùng nhìn lại nơi này, " +
            "em hy vọng anh vẫn nhớ rằng đã từng có một cô gái rất vui " +
            "vì được bước vào bầu trời của anh." +
            "<br><br>" +
            "Cảm ơn anh vì tất cả."

    }

};


/* =====================================================
   CHỜ HTML SẴN SÀNG
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           HELPER
        ================================================= */

        const $ = id =>
            document.getElementById(id);


        /* =================================================
           THÔNG TIN CẶP ĐÔI
        ================================================= */

        if ($("boyName")) {

            $("boyName").textContent =
                couple.boyName;

        }


        if ($("girlName")) {

            $("girlName").textContent =
                couple.girlName;

        }


        if ($("startDateText")) {

            $("startDateText").textContent =
                couple.startDateText;

        }


        /* =================================================
           LOVE COUNTER
        ================================================= */

        const startDate =
            new Date(
                couple.startDate
            );


        function updateCounter() {

            let difference =
                Date.now() -
                startDate.getTime();


            if (difference < 0) {

                difference = 0;

            }


            const totalSeconds =
                Math.floor(
                    difference / 1000
                );


            const days =
                Math.floor(
                    totalSeconds / 86400
                );


            const hours =
                Math.floor(
                    (totalSeconds % 86400) /
                    3600
                );


            const minutes =
                Math.floor(
                    (totalSeconds % 3600) /
                    60
                );


            const seconds =
                totalSeconds % 60;


            if ($("days")) {

                $("days").textContent =
                    days;

            }


            if ($("hours")) {

                $("hours").textContent =
                    String(hours)
                    .padStart(2, "0");

            }


            if ($("minutes")) {

                $("minutes").textContent =
                    String(minutes)
                    .padStart(2, "0");

            }


            if ($("seconds")) {

                $("seconds").textContent =
                    String(seconds)
                    .padStart(2, "0");

            }

        }


        updateCounter();


        setInterval(
            updateCounter,
            1000
        );


        /* =================================================
           ALBUM
           HỘP ẢNH + MASONRY
        ================================================= */

        const albumEntrance =
            $("albumEntrance");


        const cloudGallery =
            $("cloudGallery");


        const cloudGallerySpace =
            $("cloudGallerySpace");


        const closeCloudGallery =
            $("closeCloudGallery");


        const albumPreviewPhotos =
            $("albumPreviewPhotos");


        /* =================================================
           ẢNH NHỎ QUANH HỘP
        ================================================= */

        function createAlbumPreview() {

            if (!albumPreviewPhotos) {

                return;

            }


            albumPreviewPhotos.innerHTML =
                "";


            albumData
                .slice(0, 6)
                .forEach(
                    function (
                        item,
                        index
                    ) {

                        const card =
                            document.createElement(
                                "div"
                            );


                        card.className =
                            "album-preview-photo";


                        card.style.animationDelay =
                            `${index * 0.08}s`;


                        const img =
                            document.createElement(
                                "img"
                            );


                        img.src =
                            `images/${item.image}`;


                        img.alt =
                            item.title ||
                            "Kỷ niệm";


                        img.loading =
                            "lazy";


                        card.appendChild(
                            img
                        );


                        albumPreviewPhotos
                            .appendChild(
                                card
                            );

                    }
                );

        }


        createAlbumPreview();


        /* =================================================
           MỞ ALBUM
        ================================================= */

        if (
            albumEntrance &&
            cloudGallery
        ) {

            albumEntrance.addEventListener(
                "click",
                function () {

                    cloudGallery
                        .classList
                        .add("show");


                    document.body.style
                        .overflow =
                        "hidden";


                    createGalleryPhotos();


                    requestAnimationFrame(
                        function () {

                            requestAnimationFrame(
                                function () {

                                    observeGalleryPhotos();

                                }
                            );

                        }
                    );

                }
            );

        }


        /* =================================================
           ĐÓNG ALBUM
        ================================================= */

        if (
            closeCloudGallery &&
            cloudGallery
        ) {

            closeCloudGallery.addEventListener(
                "click",
                function () {

                    cloudGallery
                        .classList
                        .remove(
                            "show"
                        );


                    document.body.style
                        .overflow =
                        "";

                }
            );

        }


        /* =================================================
           TẠO GALLERY
        ================================================= */

        function createGalleryPhotos() {

            if (!cloudGallerySpace) {

                return;

            }


            cloudGallerySpace.innerHTML =
                "";


            const isMobile =
                window.innerWidth <= 600;


            const columnsCount =
                isMobile
                    ? 2
                    : 4;


            const gap =
                isMobile
                    ? 12
                    : 18;


            const width =
                cloudGallerySpace
                    .clientWidth;


            if (!width) {

                return;

            }


            const columnWidth =
                (
                    width -
                    gap *
                    (
                        columnsCount -
                        1
                    )
                ) /
                columnsCount;


            const columns =
                Array(
                    columnsCount
                ).fill(0);


            const rotations = [

                -2.2,

                1.5,

                -1.2,

                2.1,

                -1.7,

                1.1

            ];


            albumData.forEach(
                function (
                    item,
                    index
                ) {


                    /* =================
                       THẺ ẢNH
                    ================= */

                    const photo =
                        document.createElement(
                            "div"
                        );


                    photo.className =
                        "gallery-photo";


                    /* =================
                       HÌNH
                    ================= */

                    const img =
                        document.createElement(
                            "img"
                        );


                    img.src =
                        `images/${item.image}`;


                    img.alt =
                        item.title ||
                        "Kỷ niệm";


                    img.loading =
                        "lazy";


                    photo.appendChild(
                        img
                    );


                    /* =================
                       CHIỀU CAO
                    ================= */

                    let height;


                    if (isMobile) {

                        height =
                            [
                                170,
                                135,
                                155,
                                190,
                                145
                            ][
                                index % 5
                            ];

                    } else {

                        height =
                            [
                                225,
                                175,
                                205,
                                185,
                                240,
                                165
                            ][
                                index % 6
                            ];

                    }


                    /* =================
                       CỘT THẤP NHẤT
                    ================= */

                    const column =
                        columns.indexOf(
                            Math.min(
                                ...columns
                            )
                        );


                    const x =
                        column *
                        (
                            columnWidth +
                            gap
                        );


                    const y =
                        columns[column];


                    /* =================
                       VỊ TRÍ
                    ================= */

                    photo.style.width =
                        `${columnWidth}px`;


                    photo.style.height =
                        `${height}px`;


                    photo.style.left =
                        `${x}px`;


                    photo.style.top =
                        `${y}px`;


                    photo.style.setProperty(
                        "--photo-rotate",
                        `${rotations[
                            index %
                            rotations.length
                        ]}deg`
                    );


                    /* =================
                       DATA
                    ================= */

                    photo.dataset.image =
                        `images/${item.image}`;


                    photo.dataset.title =
                        item.title ||
                        "Kỷ niệm";


                    /* =================
                       CLICK
                    ================= */

                    photo.addEventListener(
                        "click",
                        function () {

                            openPhoto(
                                photo.dataset.image
                            );

                        }
                    );


                    cloudGallerySpace
                        .appendChild(
                            photo
                        );


                    /* =================
                       CẬP NHẬT CỘT
                    ================= */

                    columns[column] =
                        y +
                        height +
                        gap;

                }
            );


            /* =====================
               CHIỀU CAO GALLERY
            ===================== */

            cloudGallerySpace
                .style
                .height =
                `${Math.max(
                    ...columns,
                    0
                )}px`;

        }


        /* =================================================
           ẢNH XUẤT HIỆN KHI CUỘN
        ================================================= */

        let galleryObserver =
            null;


        function observeGalleryPhotos() {

            const photos =
                document.querySelectorAll(
                    ".gallery-photo"
                );


            if (galleryObserver) {

                galleryObserver.disconnect();

            }


            galleryObserver =
                new IntersectionObserver(
                    function (
                        entries
                    ) {

                        entries.forEach(
                            function (
                                entry
                            ) {

                                if (
                                    !entry.isIntersecting
                                ) {

                                    return;

                                }


                                entry.target
                                    .classList
                                    .add(
                                        "show"
                                    );


                                galleryObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }
                        );

                    },
                    {

                        threshold: 0.08,

                        root:
                            cloudGallery

                    }
                );


            photos.forEach(
                function (photo) {

                    galleryObserver
                        .observe(
                            photo
                        );

                }
            );

        }


        /* =================================================
           RESIZE
        ================================================= */

        let resizeTimer;


        window.addEventListener(
            "resize",
            function () {

                clearTimeout(
                    resizeTimer
                );


                resizeTimer =
                    setTimeout(
                        function () {

                            if (
                                cloudGallery &&
                                cloudGallery
                                    .classList
                                    .contains(
                                        "show"
                                    )
                            ) {

                                createGalleryPhotos();

                                observeGalleryPhotos();

                            }

                        },
                        180
                    );

            }
        );


        /* =================================================
           MEMORY RENDER
        ================================================= */

        const memoryRoad =
            $("memoryRoad");


        if (memoryRoad) {

            memories.forEach(
                function (memory) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "memory-item";


                    item.innerHTML = `

                        <div class="memory-card">

                            <img
                                src="images/${memory.image}"
                                alt="${memory.title}"
                                loading="lazy"
                            >

                            <small>
                                ${memory.date}
                            </small>

                            <h3>
                                ${memory.title}
                            </h3>

                            <p>
                                ${memory.text}
                            </p>

                        </div>

                        <div class="memory-dot">
                            ♡
                        </div>

                    `;


                    memoryRoad
                        .appendChild(
                            item
                        );

                }
            );

        }


        /* =================================================
           PHOTO MODAL
        ================================================= */

        const photoModal =
            $("photoModal");


        const modalImage =
            $("modalImage");


        const closePhoto =
            $("closePhoto");


        function openPhoto(image) {

            if (
                !photoModal ||
                !modalImage
            ) {

                return;

            }


            modalImage.src =
                image;


            photoModal
                .classList
                .add(
                    "show"
                );

        }


        function closePhotoModal() {

            if (
                !photoModal ||
                !modalImage
            ) {

                return;

            }


            photoModal
                .classList
                .remove(
                    "show"
                );


            modalImage.src =
                "";

        }


        if (closePhoto) {

            closePhoto.addEventListener(
                "click",
                closePhotoModal
            );

        }


        if (photoModal) {

            photoModal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        photoModal
                    ) {

                        closePhotoModal();

                    }

                }
            );

        }


        /* =================================================
           MUSIC PLAYER
        ================================================= */

        const audioPlayer =
            $("audioPlayer");


        const musicBackground =
            $("musicBackground");


        const currentSongImage =
            $("currentSongImage");


        const currentSongTitle =
            $("currentSongTitle");


        const currentSongArtist =
            $("currentSongArtist");


        const playSongButton =
            $("playSong");


        const prevSongButton =
            $("prevSong");


        const nextSongButton =
            $("nextSong");


        const progressBar =
            $("progressBar");


        const currentTime =
            $("currentTime");


        const duration =
            $("duration");


        const songList =
            $("songList");


        let currentSongIndex =
            0;


        /* =================================================
           TIME FORMAT
        ================================================= */

        function formatTime(
            seconds
        ) {

            if (
                !seconds ||
                isNaN(seconds)
            ) {

                return "0:00";

            }


            const minutes =
                Math.floor(
                    seconds / 60
                );


            const remainingSeconds =
                Math.floor(
                    seconds % 60
                );


            return `${minutes}:${String(
                remainingSeconds
            ).padStart(
                2,
                "0"
            )}`;

        }


        /* =================================================
           RENDER SONGS
        ================================================= */

        function renderSongs() {

            if (!songList) {

                return;

            }


            songList.innerHTML =
                "";


            songs.forEach(
                function (
                    song,
                    index
                ) {

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "song-item";


                    if (
                        index ===
                        currentSongIndex
                    ) {

                        item.classList
                            .add(
                                "active"
                            );

                    }


                    item.innerHTML = `

                        <strong>
                            ${song.title}
                        </strong>

                        <span>
                            ${song.artist}
                        </span>

                    `;


                    item.addEventListener(
                        "click",
                        function () {

                            currentSongIndex =
                                index;


                            loadSong(
                                currentSongIndex
                            );


                            playCurrentSong();

                        }
                    );


                    songList
                        .appendChild(
                            item
                        );

                }
            );

        }


        /* =================================================
           LOAD SONG
        ================================================= */

        function loadSong(
            index
        ) {

            const song =
                songs[index];


            if (
                !song ||
                !audioPlayer
            ) {

                return;

            }


            audioPlayer.src =
                `audio/${song.audio}`;


            if (
                currentSongTitle
            ) {

                currentSongTitle
                    .textContent =
                    song.title;

            }


            if (
                currentSongArtist
            ) {

                currentSongArtist
                    .textContent =
                    song.artist;

            }


            if (
                currentSongImage
            ) {

                currentSongImage.src =
                    `images/${song.image}`;

            }


            if (
                musicBackground
            ) {

                musicBackground.style
                    .backgroundImage =
                    `url("images/${song.image}")`;

            }


            if (progressBar) {

                progressBar.value =
                    0;

            }


            if (currentTime) {

                currentTime.textContent =
                    "0:00";

            }


            if (duration) {

                duration.textContent =
                    "0:00";

            }


            renderSongs();

        }


        /* =================================================
           PLAY
        ================================================= */

        function playCurrentSong() {

            if (!audioPlayer) {

                return;

            }


            const promise =
                audioPlayer.play();


            if (
                promise &&
                typeof promise.catch ===
                "function"
            ) {

                promise.catch(
                    function () {}
                );

            }


            if (playSongButton) {

                playSongButton
                    .textContent =
                    "❚❚";

            }

        }


        /* =================================================
           PAUSE
        ================================================= */

        function pauseCurrentSong() {

            if (!audioPlayer) {

                return;

            }


            audioPlayer.pause();


            if (playSongButton) {

                playSongButton
                    .textContent =
                    "▶";

            }

        }


        /* =================================================
           PLAY BUTTON
        ================================================= */

        if (playSongButton) {

            playSongButton.addEventListener(
                "click",
                function () {

                    if (
                        audioPlayer &&
                        audioPlayer.paused
                    ) {

                        playCurrentSong();

                    } else {

                        pauseCurrentSong();

                    }

                }
            );

        }


        /* =================================================
           NEXT
        ================================================= */

        if (nextSongButton) {

            nextSongButton.addEventListener(
                "click",
                function () {

                    currentSongIndex =
                        (
                            currentSongIndex +
                            1
                        ) %
                        songs.length;


                    loadSong(
                        currentSongIndex
                    );


                    playCurrentSong();

                }
            );

        }


        /* =================================================
           PREVIOUS
        ================================================= */

        if (prevSongButton) {

            prevSongButton.addEventListener(
                "click",
                function () {

                    currentSongIndex--;


                    if (
                        currentSongIndex <
                        0
                    ) {

                        currentSongIndex =
                            songs.length -
                            1;

                    }


                    loadSong(
                        currentSongIndex
                    );


                    playCurrentSong();

                }
            );

        }


        /* =================================================
           AUDIO
        ================================================= */

        if (audioPlayer) {

            audioPlayer.addEventListener(
                "loadedmetadata",
                function () {

                    if (duration) {

                        duration.textContent =
                            formatTime(
                                audioPlayer.duration
                            );

                    }

                }
            );


            audioPlayer.addEventListener(
                "timeupdate",
                function () {

                    if (
                        !audioPlayer.duration
                    ) {

                        return;

                    }


                    if (progressBar) {

                        progressBar.value =
                            (
                                audioPlayer.currentTime /
                                audioPlayer.duration
                            ) *
                            100;

                    }


                    if (currentTime) {

                        currentTime.textContent =
                            formatTime(
                                audioPlayer.currentTime
                            );

                    }

                }
            );


            audioPlayer.addEventListener(
                "ended",
                function () {

                    currentSongIndex =
                        (
                            currentSongIndex +
                            1
                        ) %
                        songs.length;


                    loadSong(
                        currentSongIndex
                    );


                    playCurrentSong();

                }
            );

        }


        /* =================================================
           PROGRESS BAR
        ================================================= */

        if (progressBar) {

            progressBar.addEventListener(
                "input",
                function () {

                    if (
                        !audioPlayer ||
                        !audioPlayer.duration
                    ) {

                        return;

                    }


                    audioPlayer.currentTime =
                        (
                            progressBar.value /
                            100
                        ) *
                        audioPlayer.duration;

                }
            );

        }


        /* =================================================
           KHỞI ĐỘNG MUSIC
        ================================================= */

        loadSong(
            currentSongIndex
        );


        /* =================================================
           LETTERS
        ================================================= */

        const letterModal =
            $("letterModal");


        const letterTitle =
            $("letterTitle");


        const letterText =
            $("letterText");


        const closeLetter =
            $("closeLetter");


        document
            .querySelectorAll(
                ".plane-button"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const type =
                                button.dataset
                                    .letter;


                            const letter =
                                letters[type];


                            if (!letter) {

                                return;

                            }


                            if (letterTitle) {

                                letterTitle
                                    .textContent =
                                    letter.title;

                            }


                            if (letterText) {

                                letterText
                                    .innerHTML =
                                    letter.text;

                            }


                            if (letterModal) {

                                letterModal
                                    .classList
                                    .add(
                                        "show"
                                    );

                            }

                        }
                    );

                }
            );


        function closeLetterModal() {

            if (letterModal) {

                letterModal
                    .classList
                    .remove(
                        "show"
                    );

            }

        }


        if (closeLetter) {

            closeLetter.addEventListener(
                "click",
                closeLetterModal
            );

        }


        if (letterModal) {

            letterModal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        letterModal
                    ) {

                        closeLetterModal();

                    }

                }
            );

        }


        /* =================================================
           SETTINGS
        ================================================= */

        const settingsButton =
            $("settingsButton");


        const settingsPanel =
            $("settingsPanel");


        const closeSettings =
            $("closeSettings");


        if (
            settingsButton &&
            settingsPanel
        ) {

            settingsButton.addEventListener(
                "click",
                function () {

                    settingsPanel
                        .classList
                        .toggle(
                            "show"
                        );

                }
            );

        }


        if (
            closeSettings &&
            settingsPanel
        ) {

            closeSettings.addEventListener(
                "click",
                function () {

                    settingsPanel
                        .classList
                        .remove(
                            "show"
                        );

                }
            );

        }


        /* =================================================
           DARK MODE
        ================================================= */

        const themeSwitch =
            $("themeSwitch");


        const themeText =
            $("themeText");


        function applyTheme(
            theme
        ) {

            const isDark =
                theme ===
                "dark";


            document.body
                .classList
                .toggle(
                    "dark",
                    isDark
                );


            if (themeSwitch) {

                themeSwitch
                    .classList
                    .toggle(
                        "dark",
                        isDark
                    );

            }


            if (themeText) {

                themeText.textContent =
                    isDark
                        ? "Chế độ tối"
                        : "Chế độ sáng";

            }

        }


        const savedTheme =
            localStorage.getItem(
                "trunal-theme"
            ) ||
            "light";


        applyTheme(
            savedTheme
        );


        if (themeSwitch) {

            themeSwitch.addEventListener(
                "click",
                function () {

                    const isDark =
                        document.body
                            .classList
                            .contains(
                                "dark"
                            );


                    const newTheme =
                        isDark
                            ? "light"
                            : "dark";


                    localStorage.setItem(
                        "trunal-theme",
                        newTheme
                    );


                    applyTheme(
                        newTheme
                    );

                }
            );

        }


        /* =================================================
           NAV ACTIVE
        ================================================= */

        document
            .querySelectorAll(
                ".nav-link"
            )
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            document
                                .querySelectorAll(
                                    ".nav-link"
                                )
                                .forEach(
                                    function (
                                        item
                                    ) {

                                        item.classList
                                            .remove(
                                                "active"
                                            );

                                    }
                                );


                            link.classList
                                .add(
                                    "active"
                                );

                        }
                    );

                }
            );


        /* =================================================
           NGÔI SAO 4 CÁNH
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        "input, button, audio, .photo-modal"
                    )
                ) {

                    return;

                }


                const star =
                    document.createElement(
                        "span"
                    );


                star.className =
                    "click-star";


                star.style.left =
                    `${event.clientX}px`;


                star.style.top =
                    `${event.clientY}px`;


                document.body
                    .appendChild(
                        star
                    );


                setTimeout(
                    function () {

                        star.remove();

                    },
                    1000
                );

            }
        );


        /* =================================================
           HIỆU ỨNG XUẤT HIỆN KHI CUỘN
        ================================================= */

        const revealItems =
            document.querySelectorAll(

                ".hero-photos img, " +

                ".memory-card, " +

                ".music-player, " +

                ".letter-card, " +

                ".section-heading"

            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const revealObserver =
                new IntersectionObserver(

                    function (
                        entries,
                        observer
                    ) {

                        entries.forEach(
                            function (
                                entry
                            ) {

                                if (
                                    !entry.isIntersecting
                                ) {

                                    return;

                                }


                                entry.target
                                    .classList
                                    .add(
                                        "is-visible"
                                    );


                                observer
                                    .unobserve(
                                        entry.target
                                    );

                            }
                        );

                    },

                    {
                        threshold: 0.12
                    }

                );


            revealItems.forEach(
                function (item) {

                    item.classList
                        .add(
                            "reveal-item"
                        );


                    revealObserver
                        .observe(
                            item
                        );

                }
            );

        } else {

            revealItems.forEach(
                function (item) {

                    item.classList
                        .add(
                            "is-visible"
                        );

                }
            );

        }


        /* =================================================
           ESC
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key !==
                    "Escape"
                ) {

                    return;

                }


                closePhotoModal();


                closeLetterModal();


                if (settingsPanel) {

                    settingsPanel
                        .classList
                        .remove(
                            "show"
                        );

                }

            }
        );

    }
);