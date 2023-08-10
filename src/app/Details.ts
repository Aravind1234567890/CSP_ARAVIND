export interface PuriDetails {
 
    plant_n: String;
    plant_l: String;
    tank_c: Number;
    chlorine_a: Number;
}
export interface LoginDetails {
    username: String;
    email:String;
    password: String;
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
}
export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
}
export interface Read {
    Result: [];
}
