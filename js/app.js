// inialize
const _rs = document.getElementById('result')
const _lg = document.getElementById('length')
const _up = document.getElementById('Uppercase')
const _ls = document.getElementById('Lowercase')
const _nm = document.getElementById('Number')
const _sm = document.getElementById('Symbol')
const _clip = document.getElementById('clipboard')
const _generate = document.getElementById('generate')

// random function
const FRandom = {
  lower: getRLower,
  upper: getRUpper,
  number: getRnumber,
  symbol: getRSym,
}

_generate.addEventListener('click' ,() => {
  const length = + _lg.value;
  const _hasLower = _ls.checked;
  const _hasUp = _up.checked;
  const _hasSym = _sm.checked;
  const _hasNum = _nm.checked;
  console.log(length,_hasLower, _hasSym,_hasUp,_hasNum)
  _rs.innerText = generatePassword(
    _hasLower,_hasUp,_hasNum,_hasSym,length
  )
})

function generatePassword(lower,upper,number,symbol,length){
    // 1. Init pw var
    // 2. filter out unchecked types
    // 3. Loop over length all generater function for each type
    // 4. Add final pw to the pw var and return
  let generateStr = '';

  const typeCount = lower + upper + number + symbol;

  const TypeArray = [{lower}, {upper},{number}, {symbol}].filter(item => Object.values(item)[0])

  console.log(TypeArray)

  if(TypeArray === 0){
    return ''
  }
  for(let i = 0; i < length; i+=typeCount){
    TypeArray.forEach(type => {
      const FName = Object.keys(type)[0];

      generateStr += FRandom[FName]();
    })
  }
  return finalPass = generateStr.slice(0,length);
  // return finalPass;
  // console.log(finalPass)
}

function getRLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRnumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRSym(){
  const symbol = '!@#$%^&*(){}[]=<>/,.'
  return symbol[Math.floor(Math.random() * symbol.length)];
}
