import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carrito } from '../../models/carrito';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})



export class TiendaComponent {

  comprado:boolean = false
  listaProductos: Producto[] = [
    { nombre: "papa", precio: 100},
    { nombre: "cebolla", precio: 200},
    { nombre: "remolacha", precio: 300}
  ]
  listaCarrito: Carrito[] = []
  
  comprarProducto(seleccionado:Producto){
    for (let i = 0; i < this.listaCarrito.length; i++) {
      const element = this.listaCarrito[i];

      if (element.producto == seleccionado) {
        element.cantidad++
        return
      }
      
    }
    let carrito: Carrito ={
      producto: seleccionado,
      cantidad: 1
    }
    this.listaCarrito.push(carrito)
  }
  limpiarCarrito(){
    this.listaCarrito = []
  }
  verTotal():number{
    let resultado = 0

    for (let i = 0; i <this.listaCarrito.length; i++) {
      const element =this.listaCarrito[i];
      resultado += element.producto.precio * element.cantidad
    }
    return resultado
  }
  quitarProducto(indice:number){
    this.listaCarrito[indice].cantidad--

    if (this.listaCarrito[indice].cantidad<=0) {
      this.listaCarrito.splice(indice, 1)
    }
  }
  finalizarCompra(){
    this.comprado = true
    this.limpiarCarrito()
  }
  cerrarAlerta(){
    this.comprado = false
  }
}


