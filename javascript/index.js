let $input = document.querySelector('[name="input"]')
let $output = document.querySelector('[name="output"]')
let $button = document.querySelector('[data-js="convert"]')
let $textError = document.querySelector('#error')

$button.addEventListener('click', () => {
    numberValid()
    convert()
})

$input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        numberValid()
        convert()
    }
})


function numberValid() {
    $textError.innerText = ''
    for (let i = 0; i < $input.value.length; i++) {
        if ($input.value[i] != '0' && $input.value[i] != '1') $textError.innerText = 'Erro! Número binário inválido.'
    }
}

function convert() {
    let result = []

    for (let i = $input.value.length - 1, j = 0; i >= 0; i--, j++) {
        if ($input.value[j] != '0' && $input.value[j] != '1') return $output.value = ''
        result.push($input.value[j] * 2 ** i)
    }

    if ($input.value == '') return $output.value = ''

    result.reduce((accumulator, item) => result = accumulator + item)
    $output.value = result
}