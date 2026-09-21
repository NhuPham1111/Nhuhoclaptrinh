public class bai26_2_String_methods {
    public static void main(String[] args) {
/*
* 1.indexOf : Kiểm tra vi trí xuất hiện đậu tiên của ký tự/chuỗi (return -1 nếu ko tìm thấy)
* 2.LastIndexOf: -> vị trí index xuất hiện cuối cùng của ký tự/ chuỗi (return -1 nếu ko tìm thấy)
* 3.contains: Ktra chuỗi con
* 4.substring: Lấy 1 chuỗi con (substring) từ 1 chuỗi dài hơn ; substring(int beginIndex); substring(int beginIndex, int endIndex);
* 5.repalce("str old","str new") : thay thế chuỗi cũ bằng chuỗi mới
* 6.replaceFirst ("str old","str new"): thay thế chuỗi old đầu tiên tìm thấy bằng chuõi new
* 7.trim() : xóa toàn bộ khoảng trắng ở đầu và cuối
* Cách 1: biểu thức chính quy (bai26_1)
* Cách 2: dùng vòng lặp while (bai26_1)
* */

//Buổi 2
        //indexOf
        System.out.println("\n1.test indexOf");
        String s7 = "tôi đi tìm tôi";
        System.out.println("s7 indexOf 'tôi': "+ s7.indexOf("tôi"));
        //lastIndexOf
        System.out.println("\ntest 2.");
        System.out.println("s7 lastIndexOf 'tôi': "+ s7.lastIndexOf("tôi"));

        //contain
        System.out.println("\n3.test contain");
        String s9 = ".mp3";
        String s10 ="nhuxinh.mp3";
        System.out.println("s9: "+ s9 +"\ns10: "+s10);
        System.out.println("Kiem tra s10 co contain s9 khong: ");
        boolean check = s10.contains(s9);
        if (check)
            System.out.println("Có .mp3 trong chuỗi");
        else
            System.out.println("Không tìm thấy .mp3 trong chuỗi");

        //substring
        System.out.println("\n4.test substring");
        String s11 ="abcdefgh";
        String s12 = s11.substring(4);
        System.out.println("s11: "+s11);
        System.out.println("s12 begin index 4 of s11: "+s12);
        String s13 = s11.substring(4,7) ;//4-6
        System.out.println("s13 begin 4 - 7 of s11: "+ s13);

        //repalce - replaceFirst
        System.out.println("\n5.test replace");
        String s14 ="như đi tìm như";
        String s15 = s14.replace("như","ai");
        System.out.println("s14: "+s14);
        System.out.println("replace 'nhu' by 'ai' of s14; \ns15:  "+s15);

        System.out.println("\n6.test replaceFist");
        String s16 = s14.replaceFirst("như", "Bạn");
        System.out.println("replaceFirst 'như' of s14 bằng 'bạn' \ns16: "+s16);

        //trim()
        System.out.println("\n7.test trim()");
        String s18 = "           như xinh lại đi học";
        String s19 =s18.trim();
        System.out.println("s18: "+s18);
        System.out.println("after trim from s18: \ns19: "+s19);








    }
}
