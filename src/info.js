const menu=[]
menu[0]='Margherita Pizza - Tomato sauce, fresh mozzarella, basil - $10.99';
menu[1]='Pepperoni Pizza - Tomato sauce, mozzarella cheese, pepperoni slices - $11.99'
menu[2]='Veggie Supreme Pizza - Tomato sauce, mozzarella cheese, bell peppers, onions, olives, mushrooms - $12.99';
menu[3]='BBQ Chicken Pizza - BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro - $13.99';
menu[4]='Hawaiian Pizza - Tomato sauce, mozzarella cheese, ham, pineapple - $12.99';
menu[5]="Meat Lover's Pizza - Tomato sauce, mozzarella cheese, pepperoni, sausage, bacon, ham - $14.99";
menu[6]='White Pizza - Olive oil base, mozzarella cheese, ricotta cheese, garlic, spinach - $13.99';
menu[7]='Buffalo Chicken Pizza - Buffalo sauce, mozzarella cheese, grilled chicken, red onions, blue cheese drizzle - $13.99';
menu[8]='Supreme Pizza - Tomato sauce, mozzarella cheese, pepperoni, sausage, bell peppers, onions, olives - $14.99';
menu[9]='Four Cheese Pizza - Tomato sauce, mozzarella cheese, parmesan cheese, asiago cheese, gorgonzola cheese - $13.99';


const createStaff = (name, role, phone, email) => {

    const staff = {
      name: name,
      role: role, 
      phone: phone,
      email: email
    };
  
    return staff;
  
  };
  const john=createStaff('John Smith','Restaurant Manager','john.smith@example.com');
  const emily=createStaff('Emily Johnson','Head Chef','+1 (555) 987-6543','emily.johnson@example.com');
  const david=createStaff('David Brown','Customer Service Representative','+1 (555) 456-7890','david.brown@example.com');
const staff=[john,emily,david];

export{menu,staff};