import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface User {
  id: number;
  name: string;
  email: string;
  initials: string;
  role: 'admin' | 'supervisor' | 'chef' | 'staff';
  site: string;
  status: 'active' | 'inactive';
  lastActive: string;
}

@Component({
  selector: 'app-user-management',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {

  searchTerm: string = '';
  selectedSite: string = 'all';
  selectedRole: string = 'all';
  selectedStatus: string = 'all';

  sites: string[] = [
    'All Sites',
    'DNATA Sydney',
    'DNATA Melbourne',
    'DNATA Brisbane',
    'DNATA Perth'
  ];

  roles: string[] = [
    'All Roles',
    'Enterprise Admin',
    'Site Admin',
    'Supervisor',
    'Chef',
    'Staff'
  ];

  statuses: string[] = [
    'All Status',
    'Active',
    'Inactive'
  ];

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@dnata.com',
      initials: 'JD',
      role: 'admin',
      site: 'DNATA Sydney',
      status: 'active',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@dnata.com',
      initials: 'SJ',
      role: 'supervisor',
      site: 'DNATA Sydney',
      status: 'active',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'm.chen@dnata.com',
      initials: 'MC',
      role: 'chef',
      site: 'DNATA Melbourne',
      status: 'active',
      lastActive: '5 hours ago'
    },
    {
      id: 4,
      name: 'Emma Patel',
      email: 'emma.p@dnata.com',
      initials: 'EP',
      role: 'chef',
      site: 'DNATA Brisbane',
      status: 'active',
      lastActive: '3 hours ago'
    },
    {
      id: 5,
      name: 'Lucas Rodriguez',
      email: 'lucas.r@dnata.com',
      initials: 'LR',
      role: 'staff',
      site: 'DNATA Sydney',
      status: 'active',
      lastActive: '12 hours ago'
    },
    {
      id: 6,
      name: 'Aisha Khan',
      email: 'aisha.k@dnata.com',
      initials: 'AK',
      role: 'staff',
      site: 'DNATA Perth',
      status: 'inactive',
      lastActive: '2 weeks ago'
    }
  ];

  filteredUsers: User[] = [];

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !this.searchTerm || 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesSite = this.selectedSite === 'all' || 
        user.site === this.selectedSite;
      
      const matchesRole = this.selectedRole === 'all' || 
        user.role === this.selectedRole.toLowerCase();
      
      const matchesStatus = this.selectedStatus === 'all' || 
        user.status === this.selectedStatus.toLowerCase();

      return matchesSearch && matchesSite && matchesRole && matchesStatus;
    });
  }

  onSearchChange(): void {
    this.filterUsers();
  }

  onSiteChange(event: any): void {
    this.selectedSite = event.target.value;
    this.filterUsers();
  }

  onRoleChange(event: any): void {
    this.selectedRole = event.target.value;
    this.filterUsers();
  }

  onStatusChange(event: any): void {
    this.selectedStatus = event.target.value;
    this.filterUsers();
  }

  addNewUser(): void {
    console.log('Add new user clicked');
    // Implement add user logic
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    // Implement edit user logic
  }

  managePermissions(user: User): void {
    console.log('Manage permissions for:', user);
    // Implement permissions logic
  }

  deleteUser(user: User): void {
    console.log('Delete user:', user);
    // Implement delete user logic
  }

  getRoleBadgeClass(role: string): string {
    const baseClasses = 'inline-block px-3.5 py-1.5 rounded-lg text-xs font-semibold';
    switch (role) {
      case 'admin':
        return `${baseClasses} bg-green-100 text-green-700`;
      case 'supervisor':
        return `${baseClasses} bg-emerald-100 text-emerald-600`;
      case 'chef':
        return `${baseClasses} bg-blue-100 text-blue-600`;
      case 'staff':
        return `${baseClasses} bg-gray-100 text-gray-600`;
      default:
        return baseClasses;
    }
  }

  getStatusBadgeClass(status: string): string {
    const baseClasses = 'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold';
    if (status === 'active') {
      return `${baseClasses} bg-emerald-100 text-emerald-600`;
    } else {
      return `${baseClasses} bg-red-100 text-red-600`;
    }
  }

  getRoleDisplayName(role: string): string {
    switch (role) {
      case 'admin':
        return 'Site Admin';
      case 'supervisor':
        return 'Supervisor';
      case 'chef':
        return 'Chef';
      case 'staff':
        return 'Staff';
      default:
        return role;
    }
  }

}
