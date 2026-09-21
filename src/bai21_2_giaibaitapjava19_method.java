import java.util.Scanner;

public class bai21_2_giaibaitapjava19_method {
    public static void main(String[] args) {
        /*Hàm (Method)
        Có 2 loại: có return và ko return (gọi là hàm thủ tuc procedure)
        Giúp chia nhỏ phân việc dự án
        Tái sử dụng khi cần chỉ cẩn gọi lại ctr con mà không phải viết lại

        Cau truc:
       - method co return:
        public static int phepCong(int x, int y){
        return x+y;
        }
       - method ko co return:
        public static void xinChao(String gioiTinh){
        if (gioiTinh.equals("female"))
        System.out.println("Xin chao, toi la nv nu")'
        else if(gioiTinh.equals("male"))
        System.out.println("Xin chao, toi la nv nam")'

        * */

        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap ki tu phep toan ban muon tinh: ");
        String pheptinh = sc.nextLine();
        System.out.println("Nhap so thu nhat: ");
        double a = sc.nextDouble();
        System.out.println("Nhap so thu hai: ");
        double b = sc.nextDouble();
        switch (pheptinh){
            case "+":
                Cong(a,b);
                break;
            case "-":
                Tru(a,b);
                break;
            case "*":
                Nhan(a,b);
                break;
            case "/":
                Chia(a,b);
                break;
            default:
                System.out.println("Phim bam ko hop le");
                break;
        }


    }
    /*
    * Viet phuong trinh nhap vao tu ban phim 2 so a, b
    * Nhap 1 ki tu phep tinh (+, -, *, /)
    * Dung function
    * 1. Neu nhap + : tinh a+b va in ra kq
    * 1. Neu nhap - : tinh a-b va in ra kq
    * 1. Neu nhap * : tinh a*b va in ra kq
    * 1. Neu nhap + : tinh a/b va in ra kq
    *
    * */

    public static void Cong (double a, double b){
        double kq = a+b;
        System.out.println("kq = "+kq);
    }
    public static void Tru (double a, double b){
        double kq = a-b;
        System.out.println("kq = "+kq);
    }
    public static void Nhan (double a, double b){
        double kq = a*b;
        System.out.println("kq = "+kq);
    }
    public static void Chia (double a, double b){
        if(b == 0)
            System.out.println("Ko the chia cho 0");
        else {
        double kq = a/b;
        System.out.println("kq = "+kq);
        }
    }

   }
