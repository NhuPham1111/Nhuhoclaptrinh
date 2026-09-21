public class bai6_epkieudulieu {
    public static void main(String[] args) {
        //Ep kieu rong (ko mat du lieu): be -> lon: Int -> Long -> Float -> Double
        int b = 10;
        double e = (double) b;
        System.out.println(b);
        System.out.println(e);

        //Ep kieu hep (co the mat du lieu): lon -> be: double -> float -> long -> int
        int c = 128;
        byte d = (byte) c;
        System.out.println(c);
        System.out.println(d); //sai
    }
}
