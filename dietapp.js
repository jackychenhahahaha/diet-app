$(function() {
    console.log('ready');
    var calculateCalories = function(a, b, c, d, e, f, g) {
        a = $(".age").val();
        b = $(".weight").val();
        c = $("#activeness").val();
        d = $(".change").val();
        e = $("#gainorloss").val();
        f = $('#gender').val();
        g = $('#height').val();
    
        var change = parseFloat(d);
    
        var bmr;
        var maintenance;
    
        if (e === 'loss') {
            if (f === 'male') {
                bmr = 88.3 + (14.4 * b) + (4.8 * g) - (5.7 * a);
                if (c === 'non-active') {
                    maintenance = bmr * 1.2;
                } else if (c === 'active') {
                    maintenance = bmr * 1.37;
                }
            } else if (f === 'female' || f === 'other') {
                bmr = 447.6 + (9.25 * b) + (3.1 * g) - (4.33 * a);
                if (c === 'non-active') {
                    maintenance = bmr * 1.2;
                } else if (c === 'active') {
                    maintenance = bmr * 1.37;
                }
            }
            var deficit = (3500 * change) / 7;
            var dailyCalories = maintenance - deficit;
        }
    
        if (e === 'gain') {
            if (f === 'male') {
                bmr = 88.3 + (14.4 * b) + (4.8 * g) - (5.7 * a);
                if (c === 'non-active') {
                    maintenance = bmr * 1.2;
                } else if (c === 'active') {
                    maintenance = bmr * 1.37;
                }
            } else if (f === 'female' || f === 'other') {
                bmr = 447.6 + (9.25 * b) + (3.1 * g) - (4.33 * a);
                if (c === 'non-active') {
                    maintenance = bmr * 1.2;
                } else if (c === 'active') {
                    maintenance = bmr * 1.37;
                }
            }
            var deficit = (3500 * change) / 7;
            var numdailyCalories = maintenance + deficit;
            var strdailyCalories = JSON.stringify(numdailyCalories);
        }
        console.log(strdailyCalories);
    
        $(".box-result").append($("<div>strdailyCalories</div>"));
        
    }
    
    $(".button").click(function() {
        return calculateCalories;
    })
});
// var calculateCalories = function(a, b, c, d, e, f, g) {
//     a = $(".age").val();
//     b = $(".weight").val();
//     c = $("#activeness").val();
//     d = $(".change").val();
//     e = $("#gainorloss").val();
//     f = $('#gender').val();
//     g = $('#height').val();

//     var change = parseFloat(d);

//     var bmr;
//     var maintenance;

//     if (e === 'loss') {
//         if (f === 'male') {
//             bmr = 88.3 + (14.4 * b) + (4.8 * g) - (5.7 * a);
//             if (c === 'non-active') {
//                 maintenance = bmr * 1.2;
//             } else if (c === 'active') {
//                 maintenance = bmr * 1.37;
//             }
//         } else if (f === 'female' || f === 'other') {
//             bmr = 447.6 + (9.25 * b) + (3.1 * g) - (4.33 * a);
//             if (c === 'non-active') {
//                 maintenance = bmr * 1.2;
//             } else if (c === 'active') {
//                 maintenance = bmr * 1.37;
//             }
//         }
//         var deficit = (3500 * change) / 7;
//         var dailyCalories = maintenance - deficit;
//     }

//     if (e === 'gain') {
//         if (f === 'male') {
//             bmr = 88.3 + (14.4 * b) + (4.8 * g) - (5.7 * a);
//             if (c === 'non-active') {
//                 maintenance = bmr * 1.2;
//             } else if (c === 'active') {
//                 maintenance = bmr * 1.37;
//             }
//         } else if (f === 'female' || f === 'other') {
//             bmr = 447.6 + (9.25 * b) + (3.1 * g) - (4.33 * a);
//             if (c === 'non-active') {
//                 maintenance = bmr * 1.2;
//             } else if (c === 'active') {
//                 maintenance = bmr * 1.37;
//             }
//         }
//         var deficit = (3500 * change) / 7;
//         var numdailyCalories = maintenance + deficit;
//         var strdailyCalories = JSON.stringify(numdailyCalories);
//     }
//     console.log(strdailyCalories);

//     $(".box-result").append($("<div>strdailyCalories</div>"));
    
// }

// $(".button").click(function() {
//     return calculateCalories;
// })