var counter = 0;
var start = 1;
var end = 4828;
var row = "row-content1"
$(document).ready(function () {
  var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    readJSON();
    $("#searchRestaurant").click(function () {
        var name = $("#searchText").val();
        searchByName(name);
    });
    $('#carouselExampleIndicators').bind('slide.bs.carousel', function (e) {
        var id = e.relatedTarget.id;
        if (id != 27) {
            row = "row-content" + id
            switch (id) {
                case "1":
                    start = 1;
                    end = 4828;
                    break;
                case "2":
                    start = 4829;
                    end = 9656;
                    break;
                case "3":
                    start = 9657;
                    end = 14485;
                    break;
                case "4":
                    start = 14486;
                    end = 19313;
                    break;
                case "5":
                    start = 19314;
                    end = 24141;
                    break;
                case "6":
                    start = 24142;
                    end = 28969;
                    break;
                case "7":
                    start = 28970;
                    end = 33797;
                    break;
                case "8":
                    start = 33798;
                    end = 38625;
                    break;
                case "9":
                    start = 39626;
                    end = 43453;
                    break;
                case "10":
                    start = 43454;
                    end = 48281;
                    break;
                case "11":
                    start = 48282;
                    end = 53109;
                    break;
                case "12":
                    start = 53110;
                    end = 57937;
                    break;
                case "13":
                    start = 57938;
                    end = 62765;
                    break;
                case "14":
                    start = 62766;
                    end = 67593;
                    break;
                case "15":
                    start = 67594;
                    end = 72421;
                    break;
                case "16":
                    start = 72422;
                    end = 77249;
                    break;
                case "17":
                    start = 77250;
                    end = 82077;
                    break;
                case "18":
                    start = 82078;
                    end = 86905;
                    break;
                case "19":
                    start = 86906;
                    end = 91733;
                    break;
                case "20":
                    start = 91734;
                    end = 96561;
                    break;
                case "21":
                    start = 96562;
                    end = 101389;
                    break;
                case "22":
                    start = 101390;
                    end = 106217;
                    break;
                case "23":
                    start = 106218;
                    end = 111045;
                    break;
                case "24":
                    start = 111046;
                    end = 115873;
                    break;
                case "25":
                    start = 115874;
                    end = 120701;
                    break;
                case "26":
                    start = 120702;
                    end = 125528;
                    break;
                default:
                    start = 1;
                    end = 4828;
            }
            readJSON();
        }
    });
    $("#slider").click(function () {
        $("#carouselExampleIndicators").carousel(26);
    });
    $("#sort").click(function () {
        sortByRank();
    });
});
function createColInRow(review, name, city, cuisine, rank, rate) {
    var arr = ["img/b1.jpg", "img/d1.jpg", "img/d2.jpg", "img/slider1.jpg"]
    var divElementThumb = document.createElement("div");
    divElementThumb.className = "thumb";
    //creating image
    var imgElement = document.createElement("img");
    imgElement.className = "img-fluid";
    imgElement.src = arr[counter];
    if (counter == 3) {
        counter = 0;
    }
    else {
        counter++;
    }
    divElementThumb.appendChild(imgElement);
    //creating p for review
    var pElement = document.createElement("p");
    pElement.className = "review";
    pElement.innerText = review + " reviews";
    //creating h4 for name and city
    var hElement = document.createElement("h4");
    hElement.className = "desc";
    hElement.innerHTML = name + ", " + city;
    //creating p for cuisine style
    var pElementCstyle = document.createElement("p");
    pElementCstyle.className = "cstyle";
    pElementCstyle.innerText = "Cuisine style = " + cuisine;


    var spanElementrank = document.createElement("span");
    spanElementrank.className = "lnr lnr-heart"
    //creating p for rank
    var pElementrank = document.createElement("p");
    pElementrank.appendChild(spanElementrank);
    pElementrank.innerText = "Rank " + rank;

    //creating div element for rank and rating
    var divElementrandr = document.createElement("div");
    divElementrandr.className = "meta-bottom d-flex justify-content-between";
    divElementrandr.appendChild(pElementrank);

    var spanElementrate = document.createElement("span");
    spanElementrate.className = "lnr lnr-bubble"
    //creating p for rate
    var pElementrate = document.createElement("p");
    pElementrate.appendChild(spanElementrate);
    pElementrate.innerText = "Rate " + rate;

    divElementrandr.appendChild(pElementrate);

    var divElementmain = document.createElement("div");
    divElementmain.className = "col-content col-lg-3 col-md-6"

    divElementmain.appendChild(divElementThumb);
    divElementmain.appendChild(pElement);
    divElementmain.appendChild(hElement);
    divElementmain.appendChild(pElementCstyle);
    divElementmain.appendChild(divElementrandr);

    $('#' + row).append(divElementmain);

}
function createColInRowSearch(review, name, city, cuisine, rank, rate) {
    var arr = ["img/b1.jpg", "img/d1.jpg", "img/d2.jpg", "img/slider1.jpg"]
    var divElementThumb = document.createElement("div");
    divElementThumb.className = "thumb";
    //creating image
    var imgElement = document.createElement("img");
    imgElement.className = "img-fluid";
    imgElement.src = arr[counter];
    if (counter == 3) {
        counter = 0;
    }
    else {
        counter++;
    }
    divElementThumb.appendChild(imgElement);
    //creating p for review
    var pElement = document.createElement("p");
    pElement.className = "review";
    pElement.innerText = review + " reviews";
    //creating h4 for name and city
    var hElement = document.createElement("h4");
    hElement.className = "desc";
    hElement.innerHTML = name + ", " + city;
    //creating p for cuisine style
    var pElementCstyle = document.createElement("p");
    pElementCstyle.className = "cstyle";
    pElementCstyle.innerText = "Cuisine style = " + cuisine;


    var spanElementrank = document.createElement("span");
    spanElementrank.className = "lnr lnr-heart"
    //creating p for rank
    var pElementrank = document.createElement("p");
    pElementrank.appendChild(spanElementrank);
    pElementrank.innerText = "Rank " + rank;

    //creating div element for rank and rating
    var divElementrandr = document.createElement("div");
    divElementrandr.className = "meta-bottom d-flex justify-content-between";
    divElementrandr.appendChild(pElementrank);

    var spanElementrate = document.createElement("span");
    spanElementrate.className = "lnr lnr-bubble"
    //creating p for rate
    var pElementrate = document.createElement("p");
    pElementrate.appendChild(spanElementrate);
    pElementrate.innerText = "Rate " + rate;

    divElementrandr.appendChild(pElementrate);

    var divElementmain = document.createElement("div");
    divElementmain.className = "col-content col-lg-3 col-md-6"
    divElementmain.id= "searchSlide"

    divElementmain.appendChild(divElementThumb);
    divElementmain.appendChild(pElement);
    divElementmain.appendChild(hElement);
    divElementmain.appendChild(pElementCstyle);
    divElementmain.appendChild(divElementrandr);

    $('#row-content27').append(divElementmain);

}
function readJSON() {
    $.getJSON('myjson.json', function (data) {
        var arr = [], len;
        for (key in data) {
            arr.push(key);
        }
        len = arr.length;
        for (var i = start; i <= end; i++) {
            var obj = data[i]
            var name = obj.Name;
            var city = obj.City;
            var review = obj["Number of Reviews"]
            var cuisine = obj["Cuisine Style"]
            var ranking = obj.Ranking
            var rating = obj.Rating
            createColInRow(review, name, city, cuisine, ranking, rating);
        }

    });
}
function searchByName(keyName) {
    $.getJSON('myjson.json', function (data) {
        var found = 0;
        var arr = [], len;
        for (key in data) {
            arr.push(key);
        }
        len = arr.length;

        for (var i = 1; i <= len; i++) {
            if (found != 1) {
                var obj = data[i]
                var name = obj.Name;
                if (name === keyName) {
                    $('#myModal').modal('show');
                    found = 1;
                    var city = obj.City;
                    var review = obj["Number of Reviews"]
                    var cuisine = obj["Cuisine Style"]
                    var ranking = obj.Ranking
                    var rating = obj.Rating
                    $("#row-content27").empty();
                    createColInRowSearch(review, name, city, cuisine, ranking, rating);
                }
            }
            else {
         
                break;
            }
        }
    });

}
function sortByRank() {

    $.getJSON('myjson.json', function (data) {
        var arr = [], len;
        for (key in data) {
            arr.push(key);
        }
        len = arr.length;
        data.sort(function (a, b) {
            return a.Ranking > b.Ranking;
        });
        //$("#row-content1,#row-content2,#row-content3,#row-content4,#row-content5,#row-content6,#row-content7,#row-content8,#row-content9,#row-content10,#row-content11,#row-content12,#row-content13,#row-content14,#row-content15,#row-content16,#row-content17,#row-content18,#row-content19,#row-content20,#row-content21,#row-content22,#row-content23,#row-content24,#row-content25,#row-content26").empty();
        data.sort();
        for (var i = 0; i <= 4828; i++) {
            var obj = data[i]
            var name = obj.Name;
            var city = obj.City;
            var review = obj["Number of Reviews"]
            var cuisine = obj["Cuisine Style"]
            var ranking = obj.Ranking
            var rating = obj.Rating
        
            createColInRow(review, name, city, cuisine, ranking, rating);
        }
        alert("sort done");
    });
    
}
