import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Producto, Pedido } from '../model/pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.css']
})
export class FormPedidosComponent {
  pedidos: FormGroup;
  pedido: Pedido = new Pedido;

  listaPedidos: Pedido[] = [];
  listaProductos: Producto[] = [];

  constructor(private fbuilder: FormBuilder, private pedidosService: PedidosService) {
    this.pedidos = fbuilder.group({
      id: this.pedido.id,
      idCliente: this.pedido.idCliente,
      formaPago: this.pedido.formaPago,
      direccionEntrega: this.pedido.direccionEntrega
    });

    this.pedidosService.pedidosObservable.subscribe(arr => {
      this.listaPedidos = arr;
    })
    this.pedidosService.productosObservable.subscribe(arr => {
      this.listaProductos = arr;
    })
  }

  getProductosOfId(id: number): Producto[] {
    return this.listaProductos.filter(p => p.idPedido == id);
  }

  detallePedidosValid(): boolean {
    return this.pedidosService.productosPedido.length > 0;
  }

  show() {
    console.log(this.pedidosService.pedidos);
    console.log(this.pedidosService.productos);
  }

  cancel() {
    this.pedidosService.cancelPedido();
    
    this.pedido = new Pedido;
    this.pedidos = this.fbuilder.group({
      id: this.pedido.id,
      idCliente: this.pedido.idCliente,
      formaPago: this.pedido.formaPago,
      direccionEntrega: this.pedido.direccionEntrega
    });
  }

  onSubmit() {
    this.pedido.id = this.pedidos.get('id')?.value;
    this.pedido.idCliente = this.pedidos.get('idCliente')?.value;
    this.pedido.formaPago = this.pedidos.get('formaPago')?.value;
    this.pedido.direccionEntrega = this.pedidos.get('direccionEntrega')?.value;
    this.pedidosService.addPedido(this.pedido);
    this.pedidosService.addProductos();
    this.pedido = new Pedido;
    this.pedidos = this.fbuilder.group({
      id: this.pedido.id,
      idCliente: this.pedido.idCliente,
      formaPago: this.pedido.formaPago,
      direccionEntrega: this.pedido.direccionEntrega
    });
  }
}
