import React ,{Component} from 'react' ;


export class ListaDeProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiUsario: [],
           
        }
    }
    apiCall(url, consecuecia){
        fetch(url)
            .then( response =>  response.json())
            .then( data=> consecuecia(data))
            .catch( e => console.log(e))
    }
    componentDidMount(){
        console.log("Me monte!") /** https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G */
        this.apiCall("http://localhost:3001/api/products", this.mostrar)

    }
    
    componentDidUpdate(){
        console.log("Me actualicé")
    }

    render(){
        console.log("estoy renderizando");
        /* por si la api esta cargando todavia */
        let contenido;
        if(this.state.apiUsario == ""){
            contenido = <p>Cargando...</p>
        }else{
            contenido = this.state.apiUsario
        }
    return (
        <div>
            {contenido}
        </div>
        )
    }
}


function ProductList(props) {
  return (
    <React.StrictMode>
        


            <h2 style={{display:"flex" ,borderColor:"black", border:"black", justifyContent:"center" , Border:"3px" }}>Lista De Autos </h2>
        <div style={{display:"flex",justifyContent:"center", textAlign:"center", borderColor:"black"}}>
        <table>
            
            <thead>
            <tr>
            <th>ID</th>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>PRECIO</th>
            <th>DESCRIPCION</th>
            <th>IMAGEN</th>
            </tr>
            </thead>
            <tbody>
                <th>1</th>
                <th>ford fiesta</th>
                <th>2007</th>
                <th>$100.000</th>
                <th>gnc</th>
                <th><img href="./images.jpg" ></img></th>
            </tbody>

        </table>
        
        </div>
    </React.StrictMode>
  )
}

export default ProductList