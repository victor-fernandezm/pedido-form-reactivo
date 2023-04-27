import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../model/pedido';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  productos: FormGroup;
  producto: Producto = new Producto;
  idPedido: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private fbuilder: FormBuilder, private pedidosService: PedidosService) {
    this.productos = fbuilder.group({
      idProducto: this.producto.idProducto,
      cantidad: this.producto.cantidad
    });
    if('id' in route.snapshot.queryParams) {
      this.idPedido = route.snapshot.queryParams['id'];
    }
  }

  onSubmit() {
    this.producto.idProducto = this.productos.get('idProducto')?.value;
    this.producto.cantidad = this.productos.get('cantidad')?.value;
    this.producto.idPedido = this.idPedido;
    this.pedidosService.productosPedido.push(this.producto);
    this.producto = new Producto;
    this.router.navigate(['']);
  }
}
