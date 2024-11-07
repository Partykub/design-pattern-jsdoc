class Singleton {
    // สร้าง instance แบบ static
    static instance;
  
    // ตัวสร้างแบบ private เพื่อป้องกันการสร้าง instance ใหม่
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      Singleton.instance = this;
    }
  
    // เพิ่ม method หรือ property ตามต้องการ
    doSomething() {
      console.log("Singleton instance is doing something!");
    }
}

module.exports = { Singleton };