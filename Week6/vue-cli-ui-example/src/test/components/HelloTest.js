import { shallowMount } from "@vue/test-utils";
import { Hello } from "src/components/Hello";

test("Hello", () => {
  const wrapper = shallowMount(Hello);
  wrapper.setData({ username: " ".repeat(7) });
  expect(wrapper.find(".error").exists()).toBe(true);
});
