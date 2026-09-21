import java.util.Scanner;

public class bai21_method {
    public static void main(String[] args) {
        //call method Cong()
        int kq = Cong(1,2,3);
        System.out.println("tong cac so la: "+kq);

        //call method XinChao()
        XinChao("female");
        XinChao("male");

        //call method giaiptb2
        String kq1 = Giaiptb2(1,2,3);
        String kq2 = Giaiptb2(1,2,1);
        String kq3 = Giaiptb2(1,2,-3);
        System.out.println(kq1);
        System.out.println(kq2);
        System.out.println(kq3);
        //Nang cao
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap he so a: ");
        double a = sc.nextDouble();
        System.out.println("Nhap he so b: ");
        double b = sc.nextDouble();
        System.out.println("Nhap he so c: ");
        double c = sc.nextDouble();
        String result = Giaiptb2(a,b,c);
        System.out.println(result);
    }

    //khai bao method (co return, co kdl, co kq tra ve)
    public static int Cong(int x, int y, int z){
        return x+y+z;
    }

    //Ham thu tuc (ko co return => void)
    public static void XinChao(String gioitinh){
        if(gioitinh.equals("female"))
            System.out.println("Xin chao, toi la nv nu");
        else if(gioitinh.equals("male"))
            System.out.println("Xin chao, toi la nv nam");
    }

    //Bai tap: giai ptb2 dung ham:
    //1. Tim nghiem ptb2 voi: a=1, b=2, c=3;
    //2. Tim nghiem ptb2 voi: a=1, b=2, c=1;
    //3. Tim nghiem ptb2 voi: a=1, b=2, c=-3;
    //4. Nang cao, cho nguoi dung nhap vao a,b,c
    public static String Giaiptb2 (double a, double b, double c){
        if(a == 0){
            if(b==0 && c== 0){
                return "phuong trinh bat nhat co vo so nghiem";
            }else if (b == 0 && c!= 0){
                return "phuong trinh bat nhat vo nghiem";
            }else {
                return "phuong trinh bat nhat co nghiem"+ (-c/b);
            }
        }else {
            //giai ptb2
            double delta = (b*b)-4*a*c;
            if(delta < 0)
                return "phuong trinh bat 2 vo nghiem";
            else if (delta == 0) {
                double x = -b/(2*a);
                return "phuong trinh co nghiem kep x = "+ x;
            }else {
                double x1 = (-b + Math.sqrt(delta))/2*a;
                double x2 = (-b - Math.sqrt(delta))/2*a;
                return "phuong trinh co 2 nghiem \n x1 = "+ x1 + "\n x2 = "+ x2;
            }
        }
    }
}
