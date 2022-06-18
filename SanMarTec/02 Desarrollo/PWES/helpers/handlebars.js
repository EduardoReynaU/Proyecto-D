//MOSTRAR LOS MENSAJES DE ERROR EN EL FRONTEND
const helpers = {
    mostrarAlertas: (errores = {}, alertasHTML) => {
        //RETORNA ['error']
        const categoria = Object.keys(errores)
        let html = '';

        if(categoria.length){
            errores[categoria].forEach(e => {
                html += `
                    
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    ${e}
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    ></button>
                    </div>



                `
            })
        }

        return alertasHTML.fn().html = html
    }
}

module.exports = helpers;