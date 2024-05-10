function solution(bandage, health, attacks) {
    const maxHealth = health;
    const [t, x, y] = bandage;
    
    let lastAttackPoint = 0;
    
    for(const [attackPoint, damage] of attacks) {
        const timeDiff = attackPoint - lastAttackPoint - 1;
        const heal = timeDiff * x + Math.floor(timeDiff/ t) * y;
        health = Math.min(health + heal, maxHealth);
        
        health -= damage;
        
        if(health <= 0) return -1;
        
        lastAttackPoint = attackPoint;
    }
    
    return health;
}