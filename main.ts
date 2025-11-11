namespace textSpeed {
    /**
     * แสดงข้อความบนหน้าจอ LED ด้วยความเร็วที่กำหนด
     * @param text ข้อความที่ต้องการแสดง
     * @param speed ความเร็วในการเลื่อนข้อความ (มิลลิวินาทีต่ออักษร), eg: 100
     */
    //% block="แสดงข้อความ %text ด้วยความเร็ว %speed"
    //% text.defl="Hello!"
    //% speed.min=0 speed.max=500
    export function showTextWithSpeed(text: string, speed: number): void {
        for (let i = 0; i < text.length; i++) {
            basic.showString(text.charAt(i))
            basic.pause(speed)
        }
    }
}