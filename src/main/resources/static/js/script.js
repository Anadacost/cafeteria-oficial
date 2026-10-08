       const slides = document.querySelectorAll(".slide");
        const indicadores = document.querySelectorAll(".indicador");
        const botaoAnterior = document.querySelector(".seta-anterior");
        const botaoProximo = document.querySelector(".seta-proxima");

        let slideAtual = 0;

        function mostrarSlide(numero) {
            slides.forEach((slide) => {
                slide.classList.remove("ativo");
            });

            indicadores.forEach((indicador) => {
                indicador.classList.remove("ativo");
            });

            slides[numero].classList.add("ativo");
            indicadores[numero].classList.add("ativo");

            slideAtual = numero;
        }

        botaoProximo.addEventListener("click", function () {
            const proximoSlide = (slideAtual + 1) % slides.length;
            mostrarSlide(proximoSlide);
        });

        botaoAnterior.addEventListener("click", function () {
            const slideAnterior =
                (slideAtual - 1 + slides.length) % slides.length;

            mostrarSlide(slideAnterior);
        });

        indicadores.forEach((indicador, indice) => {
            indicador.addEventListener("click", function () {
                mostrarSlide(indice);
            });
        });

        setInterval(function () {
            const proximoSlide = (slideAtual + 1) % slides.length;
            mostrarSlide(proximoSlide);
        }, 5000);