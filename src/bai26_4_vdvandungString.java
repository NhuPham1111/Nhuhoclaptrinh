import java.util.Scanner;

public class bai26_4_vdvandungString {
    public static void main(String[] args) {
        /*
        Bai1: nhap vao 1 chuoi tu ban phim,
        dem xem co bao nhieu ki tu thuong?,
        bao nhieu ki tu in hoa?
        bao nhieu so
        bao nhieu space
        * */
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap vao 1 chuoi: ");
        String s = sc.nextLine(); //doc du lieu tu ban phim va gan vao bien s
        int demSo = 0;
        int demChuThuong = 0;
        int demChuInHoa= 0;
        int demSpace = 0;
        for (int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (Character.isLowerCase(c)){
                demChuThuong++;
            } else if (Character.isUpperCase(c)) {
                demChuInHoa++;

            } else if (Character.isWhitespace(c)) {
                demSpace++;
            }else
                demSo++;
        }
        System.out.println("So chu thuong la: "+demChuThuong);
        System.out.println("So chu in hoa la: "+demChuInHoa);
        System.out.println("So chu so: "+demSo);
        System.out.println("So khoan trang: "+demSpace);


    }
}
