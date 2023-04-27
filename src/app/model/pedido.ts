export class Pedido {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _idCliente: number;
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }

    private _formaPago: string;
    public get formaPago(): string {
        return this._formaPago;
    }
    public set formaPago(value: string) {
        this._formaPago = value;
    }

    private _direccionEntrega: string;
    public get direccionEntrega(): string {
        return this._direccionEntrega;
    }
    public set direccionEntrega(value: string) {
        this._direccionEntrega = value;
    }

    constructor(id: number = 0, idCliente: number = 0, formaPago: string = "", direccionEntrega: string = "") {
        this._id = id;
        this._idCliente = idCliente;
        this._formaPago = formaPago;
        this._direccionEntrega = direccionEntrega;
    }

    public toString(): string {
        return `${this._id} ${this._idCliente} ${this._formaPago} ${this._direccionEntrega}`;
    }
}

export class Producto {
    private _idPedido: number;
    public get idPedido(): number {
        return this._idPedido;
    }
    public set idPedido(value: number) {
        this._idPedido = value;
    }

    private _idProducto: number;
    public get idProducto(): number {
        return this._idProducto;
    }
    public set idProducto(value: number) {
        this._idProducto = value;
    }
    
    private _cantidad: number;
    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }

    constructor(idPedido: number = 0, idProducto: number = 0, cantidad: number = 0) {
        this._idPedido = idPedido;
        this._idProducto = idProducto;
        this._cantidad = cantidad;
    }
    
    public toString(): string {
        return `idProd: ${this._idProducto} | cant: ${this._cantidad}`;
    }
}
