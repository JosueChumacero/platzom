const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function () {
    it('si la palabra terminar en "ar" se le quitan 2 letras',function () {
        const translation=platzom("programar")
        expect(translation).to.equal("program")
    })
    it('si la palabra inicia con "Z" se le agrega pe',function () {
        const translation=platzom("Zorro")
        const translation1=platzom("zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation1).to.equal("zarppe")
    })
    it('Si la palabra traducida tiene 10 o más letras se debe partir por la mitad y unir con un guión',function () {
        const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")		
    })
    it('Si la palabra original es un palíndromo,  ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas',function () {
        const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")			
    })
})