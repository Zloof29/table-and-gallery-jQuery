$(document).ready(function () {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: `GET`,
        success: function (data) {
            const tableArray = data.map(user => ({
                Name: user.name,
                Username: user.username,
                Email: user.email,
                Street: user.address.street,
                Suite: user.address.suite,
                City: user.address.city,
                Zipcode: user.address.zipcode,
                Lat: user.address.geo.lat,
                Lng: user.address.geo.lng,
            }));
            createTable(tableArray);
            searchForTable();
        },
        error: function (jqXHR) {
            console.error(`Error ${jqXHR.status}`);
        }
    })
})

function createTable(tableArray) {
    const tableHead = createRow(Object.keys(tableArray[0]));
    $(`#myTable thead`).append(tableHead);

    const tableBody = tableArray.map(element => createRow(Object.values(element)));
    $(`#myTable tbody`).append(tableBody);
}

function createRow(array) {
    const newTr = $(`<tr>`);
    array.forEach(element => {
        const newTd = $(`<td>`);
        newTd.text(element);
        newTr.append(newTd);
    });
    return newTr;
}

function searchForTable() {
    $(`#myInput`).on(`keyup`, function () {
        const inputValue = $(`#myInput`).val();
        $(`#myTable tbody tr`).filter(function () {
            const index = $(this).text().indexOf(inputValue);
            if (index !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    })
}

// jQuery gallery

$(document).ready(function() {
    $('.next').on('click', function() {
        const currentImg = $('.active');
        const nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function() {
        const currentImg = $('.active');
        const prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});

