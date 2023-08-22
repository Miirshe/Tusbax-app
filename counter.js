let value = 0;

const sp_increments = () => {

    let p_screen = document.querySelector('#screen');

    let digri_screen = document.querySelector('#digri_screen');

    let sp_increment = document.querySelector("#increment");

    let sp_reset = document.querySelector("#reset");

    sp_increment.addEventListener('click', () => {

        p_screen.innerHTML = value;

        value++;

        if (value <= 33) {

            digri_screen.innerHTML = 'الله أكبر';

        } else if (value >= 33 && value <= 66) {

            digri_screen.innerHTML = 'سُبْحَانَ ٱللَّٰهِ';

        } else if (value >= 66 && value <= 99) {

            digri_screen.innerHTML = 'ٱلْحَمْدُ لِلَّٰهِ';

        } else if (value >= 99 && value <= 132) {

            digri_screen.innerHTML = ' لا إله إلا الله محمد رسول الله';
        }


    });

    sp_reset.addEventListener('click', () => {

        p_screen.innerHTML = 0;

    })
}
sp_increments();