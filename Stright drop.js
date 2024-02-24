// Constants
const g = 9.81;
const Pi = 3.14;

// Function to calculate Straight Drop Spillway
function calculateStraightDropSpillway(event) {
    event.preventDefault(); // Prevent form submission
    
    // Gather inputs from form fields
    var c = parseFloat(document.getElementById("c").value);
    var i = parseFloat(document.getElementById("i").value);
    var A = parseFloat(document.getElementById("A").value);
    var f = parseFloat(document.getElementById("f").value);

    // Calculate runoff collected from catchment area (Qg)
    var Qg = c * i * A / 36;

    // Calculations for the Height of structure
    var l = 3;
    var h;
    while (l <= 5) {
        var x = (Qg * (1.1 + 0.01 * f)) / (1.711 * l);
        h = Math.pow(x, 0.666667);
        if ((h / f) < 0.5) {
            break;
        }
        l += 0.5;
    }

    // Calculation of Minimum length of Head Wall Extensions
    var E1 = (3 * h) + 0.6;
    var E2 = 1.5 * f;
    var E = E1 > E2 ? E1 : E2;

    // Calculation of Length of basin
    var Lb = f * (2.28 * (h / f) + 0.52);

    // Calculation of Height of Longitudinal Wall
    var S = h / 4;

    // Calculation of Height of wing wall and side wall at junction
    var J1 = 2 * h;
    var J2 = (f + S + h - (Lb + 0.1 / 2));
    var J = J1 > J2 ? J1 : J2;

    // Calculation of end sill and transverse sill
    var Ht = h / 3;

    // Components
    var M = 2 * (f + 1.33 * h - J);
    var K = (Lb + 0.1) - M;

    // Display results in HTML
    document.getElementById("Qg").innerText = Qg.toFixed(2);
    document.getElementById("h").innerText = h.toFixed(2);
    document.getElementById("E").innerText = E.toFixed(2);
    document.getElementById("Lb").innerText = Lb.toFixed(2);
    document.getElementById("S").innerText = S.toFixed(2);
    document.getElementById("J").innerText = J.toFixed(2);
    document.getElementById("Ht").innerText = Ht.toFixed(2);
    document.getElementById("M").innerText = M.toFixed(2);
    document.getElementById("K").innerText = K.toFixed(2);

    // Show results
    document.getElementById("result").style.display = "block";
}

// Attach event listener to form submission
document.getElementById("spillwayForm").addEventListener("submit", calculateStraightDropSpillway);
