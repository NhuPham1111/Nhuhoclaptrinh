public class bai23_mathjava {
    public static void main(String[] args) {
        System.out.println("PI = " + Math.PI);
        int a = -10;
        System.out.println(Math.abs(a));
        System.out.println(Math.max(2,100));
        System.out.println(Math.min(2,100));
        System.out.println(Math.sqrt(4)); //kq la double
        System.out.println(Math.pow(2,3)); //kq la double
        //sin, cos, tag
        int goc = 90;
        double sin = Math.sin(Math.PI*goc/180);
        double cos = Math.cos(Math.PI*goc/180);
        double tan = Math.tan(Math.PI*goc/180);
        System.out.println("sin 90 deg = " + sin);
        System.out.println("cos 90 deg = " + cos);
        System.out.println("tan 90 deg = " + tan);
    }
}

/*Math trong Java
* PI            -> gia tri so PI
* abs(a)        -> tri tuyet doi cua so a
* max (a,b)     -> gia tri lon nhat giua a va b
* min (a,b)     -> gia tri nho nhat giua a va b
* sqrt(a)       -> can bac 2 cua so a
* pow(x,y)      -> luy thua x^y
* sin(radiant)  -> tinh sin, radian = Math.PI*goc/180
* cos(radian)   -> tinh cos
* tan(radian)   -> tinh tan
* */
