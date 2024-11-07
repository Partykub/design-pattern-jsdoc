import { Singleton } from "../../src/home_work/home_work";


describe("Singleton Pattern", () => {
  it("should return the same instance for multiple calls", () => {
    const instance1 = new Singleton();
    const instance2 = new Singleton();

    // ตรวจสอบว่า instance ทั้งสองอ้างอิงไปที่ instance เดียวกัน
    expect(instance1 === instance2).toBe(true);
  });

  it("should allow calling methods on the singleton instance", () => {
    const instance = new Singleton();

    // ตรวจสอบว่า method doSomething() ทำงานได้ถูกต้อง
    const consoleSpy = jest.spyOn(console, 'log');
    instance.doSomething();
    expect(consoleSpy).toHaveBeenCalledWith("Singleton instance is doing something!");
    consoleSpy.mockRestore();
  });
});