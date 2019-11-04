
    private static boolean checkValue(Integer input, Map<Integer, String> map) {
        return   input==null?true:map.containsKey(input);
    }

    private static String getName(Integer input, Map<Integer, String> map) {
        return map.containsKey(input) ? map.get(input) : "未知";
    }

}
