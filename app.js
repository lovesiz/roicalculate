let btn = document.getElementById("btn");

btn.onclick = function () {
  let mp = parseFloat(document.getElementById("mp").value);
  let np = parseFloat(document.getElementById("np").value);
  let br = 20;
  let mp1 = mp * 1000000000;
  let np1 = np * 1000000000000000000;
  let price = parseFloat(document.getElementById("price").value);

  var block = br * (mp1 / np1);
  var daily = block * 6 * 24;
  let s = document.getElementById("di");
  s.innerHTML = daily.toFixed(8);
  let mrd = document.getElementById("mrd");
  mrd.innerHTML = price / daily + "days";
};
