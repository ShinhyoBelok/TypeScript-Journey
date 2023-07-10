interface User1 {
  readonly dbId: number
  email: string,
  userId: number,
  googleId?: string
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

interface User1 {
  githubToken: string
}

interface Admin1 extends User1 {
  role: "admin" | "ta" | "learner"
}

const hitesh: Admin1 = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
  return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
  return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33