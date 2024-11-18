const birthYear = +prompt('Введіть свій рік народження: ');
if (isNaN(birthYear) || birthYear === null) {
    alert('Будь ласка, введіть Ваш рік корректно')
} else {
    const nativeCity = prompt('Введіть місто, де Ви проживаєте: ');
    if (nativeCity === null){
        alert('Шкода, що Ви не захотіли ввести своє місто')
    } else {
        const sportActivity = prompt('Введіть улюблений вид спорту: ');
        if (sportActivity === null){
            alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
        } else {
            const age = 2024 - birthYear;

            let cityInfo;
            switch (nativeCity) {
                case 'Київ':
                    cityInfo = 'Ти живеш у столиці України';
                    break;
                case 'Вашингтон':
                    cityInfo = 'Ти живеш у столиці США';
                    break;
                case 'Лондон':
                    cityInfo = 'Ти живеш у столиці Великобританії';
                    break;
                default:
                    cityInfo = 'Ти живеш у місті '+ nativeCity;
            }

            let sportInfo;
            switch (sportActivity) {
                case 'бокс':
                    sportInfo = 'Круто! Хочеш стати як Олександр Усик?';
                    break;
                case 'дзюдо':
                    sportInfo = 'Круто! Хочеш стати як Денис Вірний?';
                    break;
                case 'хокей':
                    sportInfo = 'Круто! Хочеш стати як Сергій Бобровський?';
                    break;
                default:
                    sportInfo = 'Твій вид спорту '+ sportActivity;
            }

            alert("Ваш вік: " + age + '. ' + cityInfo + '. ' + sportInfo)
        }
    }
}
