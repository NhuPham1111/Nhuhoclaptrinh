import java.util.Scanner;

public class bai11_if_else_giaibaitap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
// vi du diem trung binh
//        System.out.println("Nhap dtb: ");
//        double dtb = sc.nextDouble();
//        if(dtb >=8 && dtb <10) {
//            System.out.println("ban xep loai gioi");
//        } else if (dtb >=7 && dtb <8) {
//            System.out.println("Ban xep loai kha");
//        }
//    else{
//            System.out.println("ban da tach");
//        }


        //Bai tap 04: Tim x, y biet tong va hieu cua chung
/*        System.out.println("Nhap tong cua 2 so x, y: ");
        float sum = sc.nextFloat();
        System.out.println("Nhap vao hieu cua 2 so x, y");
        float sub = sc.nextFloat();
        //tinh toan
        float x = (sum + sub)/2;
        float y = sum - x;
        System.out.println("gia tri x la: "+ x);
        System.out.println("gia tri y la: "+ y);*/

        //Bai tap 05: Viet chuong trinh nhap chieu cao, can nang, tinh BMI
/*        System.out.println("Nhap chieu cao: ");
        double height = sc.nextDouble();
        System.out.println("Nhap can nang: ");
        double weight = sc.nextDouble();
        double bmi = weight/(Math.pow(height,2));
        if(bmi < 15) {
            System.out.println("Ban qua gay");
        }else if (bmi >= 15 && bmi < 16) {
                System.out.println("ban gay");
        } else if (bmi >= 16 && bmi < 18) {
            System.out.println("ban hoi gay");
        } else if (bmi >= 18.5 && bmi < 25) {
            System.out.println("Ban binh thuong");
        } else if (bmi >= 25 && bmi < 30) {
            System.out.println("ban hoi beo");
        } else if (bmi >= 30 && bmi < 35) {
            System.out.println("Ban beo roi");
        } else {
            System.out.println("Ban qua beo roi, giam can lien thoi");
        }*/

        //Bai 06: Viet chuong trinh nhap vao 1 nam duong lich, kiem tra nam nhuan hay ko
        //Goi y: nam nhuan la nam
        /*
        * chia het cho 4 va ko chia het cho 100
        * hoac chia het cho 400
        * */
//        System.out.println("Nhap vao nam duong lich: ");
//        int nam = sc.nextInt();
//        if((nam % 4 == 0) && (nam % 100 != 0) || (nam % 400 == 0)){
//            System.out.println("Nam "+ nam + " la nam nhuan");
//        }else {
//            System.out.println("Nam "+ nam + " khong phai la nam nhuan");
//        }

        //Bai tap 07: Viet chuong trinh cho nguoi dung nhap vao 1 thang bat ki, cho biet thang do co bao nhieu ngay
        //Goi y:
        /*
        * Thang 1,3,5,7,8,10,12 -> 31 ngay
        * Thang 4,6,9,11 co 30 ngay
        * Thang 2 thi yeu cau nhap them nam (neu nam nhuan co 29 ngay, ko nhuan co 28 ngay)
        * */

/*        System.out.println("Nhap thang: ");
        int thang = sc.nextInt();
        if(thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12){
            System.out.println("Thang" + thang + " co 31 ngay");
        } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            System.out.println("Thang" + thang + " co 30 ngay");
        } else if (thang == 2) {
            System.out.println("Nhap vao nam: ");
            int nam = sc.nextInt();
            if((nam % 4 == 0) && (nam % 100 != 0) || (nam % 400 == 0)){
            System.out.println("Thang "+ thang + "Nam "+ nam + "  co 29 ngay");
            }else {
                System.out.println("Thang "+ thang + "Nam "+ nam + " co 28 ngay");
            }

        }else
            System.out.println("Nhap thang tao lao roi");*/

        //Bai 08: Viet chuong trinh giai phuong trinh bac 2 (nguoi dung nhap a, b, c)
        //goi y:
        /*
        * ax^2 + bx + c = 0;
        * TH1: a=0 => giai nhu pt bac 1
        * TH2: a # 0 => tinh delta giai nhu binh thuong
        * */
//        System.out.println("Nhap he so a: ");
//        double a = sc.nextDouble();
//        System.out.println("Nhap he so b: ");
//        double b = sc.nextDouble();
//        System.out.println("Nhap he so c: ");
//        double c = sc.nextDouble();
//        double delta = Math.pow(b,2) - (4*a*c);
//        if (delta < 0){
//            System.out.println("Phuong trinh vo nghiem");
//        } else if (delta == 0) {
//            double x = -b/(2*a);
//            System.out.println("Phuong trinh co nghiem kep x1 = x2 = " + x);
//        }else{
//            double x1 = (-b - Math.sqrt(delta))/2*a;
//            double x2 = (-b + Math.sqrt(delta))/2*a;
//            System.out.println("Phuong trinh co 2 nghiem: \n"+ "x1 = "+ x1 + "\n" + "x2 = " + x2);
//        }


        //Bai 09: Viet chuong trinh nhap vao thang trong nam va cho biet thang thuoc quy may
        //Goi y: 1 nam co 4 quy
        System.out.println("Nhap thang trong nam: ");
        int thang = sc.nextInt();
        if( thang >= 1 && thang < 4){
            System.out.println("thang "+ thang + " thuoc quy 1");
        } else if (thang >=4 && thang < 7) {
            System.out.println("thang "+ thang + " thuoc quy 2");
        } else if (thang >=7 && thang < 10) {
            System.out.println("thang "+ thang + " thuoc quy 3");
        }else {
            System.out.println("thang "+ thang + " thuoc quy 4");

        }
    }
}
