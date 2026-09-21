import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.InputMismatchException;
import java.util.Scanner;

public class bai22_datetimejava {
    public static void main(String[] args) {
        //1.Khoi tao
        Calendar cal = Calendar.getInstance();
        //get : lay ngay thang nam
        System.out.println("Hom nay ngay: " + cal.get(Calendar.DAY_OF_MONTH));
        System.out.println("Thang: " + (cal.get(Calendar.MONTH) + 1));//thang trong java 0->11
        System.out.println("Nam: " + cal.get(Calendar.YEAR));

        //2.set: set ngay thang nam theo y muon vd: 11/11/1996, set ko co tra ve
        cal.set(Calendar.DAY_OF_MONTH, 11);
        cal.set(Calendar.MONTH, 11);
        cal.set(Calendar.YEAR, 1996);
        int ngaysinh = cal.get(Calendar.DAY_OF_MONTH);
        int thangsinh = cal.get(Calendar.MONTH);
        int namsinh = cal.get(Calendar.YEAR);
        System.out.println("Ngay thang nam sinh: " + ngaysinh + "/" + thangsinh + "/" + namsinh);
        //neu la thang 12 thi van dung 11, luc xuat thi +1

        //3.Xuat theo dinh dang Ngay/Thang/Nam, gio phut giay
        SimpleDateFormat fm = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss a");
        Date d = cal.getTime();
        String formattedDate = fm.format(d);
        System.out.println("Ngay sau format: " + formattedDate);

        //Giai bai tap: viet ctr nhap tu ban phim ngay, thang, nam
        //cho biet tuoi, va in ra man hinh
        int day, month, year, tuoi;
        Scanner input = new Scanner(System.in);
        System.out.println("Nhap ngay sinh : ");
        day = input.nextInt();
        System.out.println("Nhap thang sinh : ");
        month = input.nextInt();
        System.out.println("Nhap nam sinh : ");
        year = input.nextInt();

        //Khoi tao Calendar
        Calendar birthday = Calendar.getInstance();
        //set ngay thang nam sinh do nguoi dung nhap vao:
        birthday.set(year,month-1, day);

        //xuat ngay thang nam sinh:
        int ngsinh = birthday.get(Calendar.DAY_OF_MONTH);
        int thsinh = birthday.get(Calendar.MONTH);
        int nsinh = birthday.get(Calendar.YEAR);
        System.out.println("Ngay thang nam sinh: "
                + ngsinh + "/"
                + (thsinh+1) + "/"
                + nsinh);
        //Tinh tuoi
        Calendar calnow = Calendar.getInstance();
        int currentYear = calnow.get(Calendar.YEAR);
        tuoi = currentYear - nsinh;
        System.out.println("Tuoi cua ban la: " + tuoi);


//        birthday.setLenient(false);
//
//
//
//        while (true) {
//
//            day = inputInt(sc, "Nhập ngày sinh (1-31): ", 1, 31);
//            month = inputInt(sc, "Nhập tháng sinh (1-12): ", 1, 12);
//            year = inputInt(
//                    sc,
//                    "Nhập năm sinh: ",
//                    1900,
//                    Calendar.getInstance().get(Calendar.YEAR));
//
//            try {
//                birthday.set(year, month - 1, day);
//                birthday.getTime(); // Kiểm tra ngày hợp lệ
//
//                // Hợp lệ thì thoát
//                break;
//
//            } catch (IllegalArgumentException e) {
//                System.out.println("\nNgày không tồn tại (ví dụ: 31/02). Vui lòng nhập lại!\n");
//            }
//        }
//
//        System.out.println("\nNgày sinh: "
//                + birthday.get(Calendar.DAY_OF_MONTH) + "/"
//                + (birthday.get(Calendar.MONTH) + 1) + "/"
//                + birthday.get(Calendar.YEAR));
//
//        Calendar now = Calendar.getInstance();
//
//        int age = now.get(Calendar.YEAR) - birthday.get(Calendar.YEAR);
//
//        if (now.get(Calendar.MONTH) < birthday.get(Calendar.MONTH)
//                || (now.get(Calendar.MONTH) == birthday.get(Calendar.MONTH)
//                && now.get(Calendar.DAY_OF_MONTH) < birthday.get(Calendar.DAY_OF_MONTH))) {
//            age--;
//        }
//
//        System.out.println("Bạn " + age + " tuổi.");
//    }
//
//    public static int inputInt(Scanner sc, String message, int min, int max) {
//
//        while (true) {
//            try {
//                System.out.print(message);
//                int value = sc.nextInt();
//
//                if (value >= min && value <= max) {
//                    return value;
//                }
//
//                System.out.println("Giá trị phải từ " + min + " đến " + max + ".");
//
//            } catch (InputMismatchException e) {
//                System.out.println("Vui lòng chỉ nhập số nguyên.");
//                sc.nextLine(); // Xóa dữ liệu sai
//            }
//        }
//
    }
}
