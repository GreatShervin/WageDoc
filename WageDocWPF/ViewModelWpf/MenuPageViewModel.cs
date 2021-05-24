using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WageDocWPF.Core;

namespace WageDocWPF.ViewModelWpf
{
    class MenuPageViewModel : ObservableObject
    {
        public RelayCommand HomeViewCommand { get; set; }

        public RelayCommand DiscoveryViewCommand { get; set; }

        public object _currentView;
        public HomeViewModel HomeVm { get; set; }
        public DiscoveryViewModel DiscoveryVm { get; set; }
        public object CurrentView
        {
            get { return _currentView; }
            set
            {
                _currentView = value;
                OnPropertyChanged();
            }
        }
       public MenuPageViewModel()
        {
            HomeVm = new HomeViewModel();
            DiscoveryVm = new DiscoveryViewModel();
            CurrentView = HomeVm;

            HomeViewCommand = new RelayCommand(o => {
                CurrentView = HomeVm;
            });
            DiscoveryViewCommand = new RelayCommand(o =>{
                CurrentView = DiscoveryVm;
            });
        }
    }
}
