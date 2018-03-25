interface Animal {
  bark(): string
}

export class Dog implements Animal {
  bark(): string {
    return 'Bow-wow'
  }
}

export class Cat implements Animal {
  bark(): string {
    return 'Meow'
  }
}
