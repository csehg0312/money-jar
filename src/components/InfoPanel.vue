<template>
    
    <div class="container">
        <div class="info">
            <svg @click="openPopup" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1200 1200" xml:space="preserve"><path d="M585.558 0c-97.152-.233-273.994 93.271-279.6 176.4s11.325 88.252 19.2 92.8h91.2c20.839-47.054 46.22-74.561 112.8-74s139.612 83.846 108.8 157.6-59.285 99.443-97.2 179.2c-37.914 79.757-50.579 200.231-.8 300.4l112.4 2c-27.82-142.988 119.439-270.381 178-358.4 58.559-88.019 64.125-121.567 64.8-194.4-.517-69.114-25.544-138.181-80-194.4S682.71.234 585.558 0m5.599 927.601c-75.174 0-136 60.825-136 135.999 0 75.176 60.826 136.4 136 136.4s136-61.226 136-136.4-60.825-135.999-136-135.999"/></svg>
        </div>
    </div>

</template>

<style>
    .container {
        display: flex;
        justify-content: space-between;
    }

    .info {
        margin-left: auto;
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }

        .moved-div {
            margin-left: 0;
            margin-top: 1rem;
        }
    }
</style>

<script>
    import game from '../data/info.json'

    export default {
        methods: {
            openPopup() {
            //   const game = { /* define game object here */ };

            this.$swal.fire({
                title: 'Játék célja',
                html: `
                <div>
                    <p>${game.game.name}</p>
                </div>
                <div>
                    <p>${game.game.description}</p>
                </div>
                `,
                showCancelButton: true,
                confirmButtonText: 'Következő',
                cancelButtonText: 'Bezár',
                confirmButtonColor: '#00ff99',
                cancelButtonColor: '#ff0099'
            }).then((result) => {
                if (result.isConfirmed) {
                this.$swal.fire({
                    title: 'Játékmenet',
                    html: `
                    <div>
                        <h3>Feladatod:</h3>
                        <p>${game.game.rules.overview1}</p>
                    </div>
                    <div>
                        <h3>Döntés:</h3>
                        <p>${game.game.rules.overview2}</p>
                        <p>${game.game.rules.overview3}</p>
                    </div>
                    `,
                    showCancelButton: true,
                    confirmButtonText: 'Következő',
                    cancelButtonText: 'Bezár',
                    confirmButtonColor: '#00ff99',
                    cancelButtonColor: '#ff0099'
                }).then((result) => {
                    if (result.isConfirmed) {
                    this.$swal.fire({
                        title: 'A döntés rajtad áll',
                        html: `
                        <div>
                            <h3>Vásárlás a piacon</h3>
                            <p>${game.game.rules.buy_knowhow}</p>
                        </div>
                        <div>
                            <h3>Adakozás a közösségnek</h3>
                            <p>${game.game.rules.give_knowhow}</p>
                        </div>
                        <div>
                            <h3>Spórolás a jövőért</h3>
                            <p>${game.game.rules.save_knowhow}</p>
                        </div>
                        `,
                        showCancelButton: true,
                        confirmButtonText: 'Rendben',
                        cancelButtonText: 'Bezár',
                        confirmButtonColor: '#00ff99',
                        cancelButtonColor: '#ff0099'
                    });
                    }
                });
                }
            });
            }
        }
}
    

</script>