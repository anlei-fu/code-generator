
    private static Integer checkValue(Integer input, Map<Integer, String> map) {
        return map.containsKey(input) ? input : null;
    }

    private static String getName(Integer input, Map<Integer, String> map) {
        return map.containsKey(input) ? map.get(input) : "未知";
    }

}
