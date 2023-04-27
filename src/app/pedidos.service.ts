import { Injectable } from '@angular/core';
import { Pedido, Producto } from './model/pedido';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private _pedidos: Pedido[] = [];
  public get pedidos(): Pedido[] {
    return this._pedidos;
  }
  public get pedidosObservable(): Observable<Pedido[]> {
    return of(this._pedidos);
  }

  private _productos: Producto[] = [];
  public get productos(): Producto[] {
    return this._productos;
  }
  public get productosObservable(): Observable<Producto[]> {
    return of(this._productos);
  }

  public getProductosOf(id: number): Producto[] {
    return this._productos.filter(p => p.idPedido == id);
  }
  public getProductosOfObservable(id: number): Observable<Producto[]> {
    return of(this._productos.filter(p => p.idPedido == id));
  }

  private _productosPedido: Producto[] = [];
  public get productosPedido(): Producto[] {
    return this._productosPedido;
  }

  constructor() { }

  addPedido(p: Pedido): void {
    this._pedidos.push(p);
  }

  addProducto(p: Producto): void {
    this._productos.push(p);
  }

  addProductos(): void {
    this._productos.push(...this._productosPedido);
    this._productosPedido = [];
  }

  cancelPedido(): void {
    this._productosPedido = [];
  }
}
