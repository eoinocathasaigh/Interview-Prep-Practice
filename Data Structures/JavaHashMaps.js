import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        //Brute Force Method of solving it
        /*
        for(int i = 0; i < nums.length; i++){
            for(int j = i+1; j < nums.length; j++){
                if ((nums[i] + nums[j]) == target){
                    return new int[]{i, j};
                }
            }
        }
        */
        //HashMap method of solving it
        HashMap<Integer, Integer> map = new HashMap<>();

        //Looping through the array
        for(int i = 0; i < nums.length; i++){
            //Compliment - what value would we need to add to the current number to reach a solution
            int compliment = target - nums[i];

            if(map.containsKey(compliment)){
                return new int[]{map.get(compliment), i};
            }

            //Then need to add them to the map if they dont already exist
            map.put(nums[i], i);
        }

        return new int[]{};
    }
}