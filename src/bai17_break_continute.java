import java.util.Scanner;

public class bai17_break_continute {
    public static void main(String[] args) {
/*        //continute
        //vd tinh tong tu 1-5, nhung bo qua so 3
        int tong = 0;
        for(int i = 0; i <= 5; i++){
            if (i == 3)
                continue;
            else
            tong+=i;
        }
        System.out.println("tong = "+ tong);

        //break
        int n = 0;
        while (n < 100){
            System.out.println("n = "+ n);
            if (n == 15)
                break;
        }*/

        //bai 12: viet ctr nhap vao tu ban phim so nguyen n, in ra kq n!
        //dung vong lap for
        //dung vong lap while
//        Scanner sc = new Scanner(System.in);
//            System.out.println("Nhap vao so nguyen n: ");
//            int n = sc.nextInt();
//            int gt = 1;
            //for
/*        for(int i = 1; i<=n ; i++){
            gt = gt*i;
        }
        System.out.println("!"+ n + " = "+ gt);*/

        //while
/*        int i = 1;
        while (i <= n){
            gt = gt*i;
            i++;
        }
        System.out.println("!"+n + " = "+gt);*/

        //bai tap 13: Viet chuong trinh nhap so a tu ban phim;
        //Neu a chan thi tinh tong cac so chan tu 0 -> a;
        // Neu a le thi in ra dong chu: "toi o tinh tong so le, bye bye" va thoat chuong trinh
        /*Scanner sc1 = new Scanner(System.in);
        System.out.println("Nhap vao so nguyen a: ");
        int a = sc1.nextInt();
        int sum = 0;
            if (a % 2 != 0) {
                System.out.println("toi ko tinh tong so le, bye bye");

            } else {
        for (int i = 0; i <= a; i+=2){
                sum+= i;
            }
                System.out.println("tong cac so chan tu 0 - "+ a + "= "+ sum);
        }*/

        //bai14: Viet chuong trinh tinh tong cac so le tu 1- n, n nhap tu ban phim
        /*
        * 1. Nhap n = 7. bo qua cong tong voi so 3 => in kq (vd: 1+5+7 = 13)
        * 2. Thu break khi vong lap chay den gia tri n=3
        * */
/*        Scanner sc2 = new Scanner(System.in);
        System.out.println("Nhap vao so nguyen n: ");
        int n = sc2.nextInt();
        int sum = 0;
        if (n % 2 != 0){
        for (int i = 1; i<= n; i+=2) {
            System.out.println("i: "+ i);
            if(i == 3)
//                continue;
                break;
            else
                sum+= i;
        }
        System.out.println("Tong cac so tu 1 - "+ n + "= "+ sum);
        }*/

        //Bai 15: Viet chuong trinh: Tim nhung so chia het cho 3, n nhap tu ban phim;
/*        Scanner sc3 = new Scanner(System.in);
        System.out.println("Moi nhap vao so nguyen: ");
        int n = sc3.nextInt();
        for (int i = 10; i <= n; i++){
            if(i % 3 == 0){
                System.out.println("i = "+ i);
            }
        }*/

        //Bai 16: Viet chuong trinh tinh tong S = 1! + 2! + 3!+...10!;
/*        int m = 1;
         int tong = 0;
         for (int i = 1; i <= 10; i++){
//             System.out.println("i = "+i);
//             System.out.println("m = "+m);
             m =  m*i;
             tong += m;
         }
        System.out.println("tong = "+ tong);*/

        //Bai 17: So hoan hao la so: Tong cac uoc thuc cua no bang chinh no (vd: 6 = 1+ 2+ 3)
        //Tim tat ca nhung so hoan hao trong pham vi tu 1-1000
/*        int n = 6;
        int tong = 0;
        for (int i = 1; i < n; i++){
            if(n%i == 0){
//                System.out.println("i = "+ i);
                tong += i;
            }
        }
        System.out.println("tong = "+ tong);
        if(tong == n){
            System.out.println("n = "+ n +"la so hoan hao");
        } else {

        System.out.println("n = "+ n +" khong la so hoan hao");
        }*/

/* giai bai tap
 for(int n = 1; n <= 1000 ; n++){
            int tong = 0;
            for (int i = 1; i < n; i++){
                if(n%i == 0){
                    tong +=i;
                }
            }
            if(tong == n){
                System.out.println("n = "+ n +" la so hoan hao");
            }
        }*/

        //Bai 18: Viet chuong trinh nhap so nguyen a>0 tu ban phim,
        // cho biet do co phai so nguyen to? (so nguyen to la so > 1, va chi chia het cho 1 va cho chinh no)
        //Ket thuc chuong trinh hoi user: "Ban co muon tiep tuc su dung phan mem khong?
        //Neu chon "Khong" thi thoat chuong trinh;
        Scanner sc4 = new Scanner(System.in);

        while (true){
            System.out.println("Hay nhap so nguyen a> 0: ");
            int a = sc4.nextInt();

            while (a < 0) {
                System.out.println("Nhap lai a, a phai > 0");
                a = sc4.nextInt();
            }
            System.out.println("Ban da nhap a = "+ a);
            int demUoc = 0;
            for(int i = 1; i<=a; i++){
                if(a%i == 0){
                    demUoc++;
                }
            }
            if(demUoc == 2)
                System.out.println("a = "+ a+" la so nguyen to");
            else
                System.out.println("a = "+ a+" khong la so nguyen to");
            System.out.println("Ban co muon tiep tuc su dung phan mem khong? Bam y de thoat");
            String traloi = new Scanner(System.in).nextLine();
            if(traloi.equals("y") ||traloi.equals("Y"))
                break;
        }




    }
}
