   M S B A M L   `   `   `  ����E  AWageDocWPF, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null7 clr-namespace:WageDocWPF.ViewWPFWageDocWPF.ViewWPF  5   	   A%clr-namespace:WageDocWPF.ViewModelWpfWageDocWPF.ViewModelWpf  5   	   !    WageDocWPF.ViewWPF.MenuPage   5   	   \ XPresentationFramework, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089W SPresentationCore, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   2local clr-namespace:WageDocWPF.ViewWPF     5   	   <
viewmodels%clr-namespace:WageDocWPF.ViewModelWpf     5   	   b ^MaterialDesignThemes.Wpf, Version=4.0.0.2422, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5   
   -   5          � Title$  MenuPage��5
   	   $	��600��6   $	��900��6'    � WindowStyle$
 None=�5   	    � 
ResizeMode$ NoResize=�5   	   
������  � DataContext 5      /  )WageDocWPF.ViewModelWpf.MenuPageViewModel  5   
   .��5      ��  �� CornerRadius$ 10��6   ��5   
   �� 5       �� 
StartPoint$  0.1,0&�6"    �� EndPoint$ 0.9,1&�66   .��5      �  � Color$ #003534��6    � Offset$ 1Q�6/   � 5      $ #56776c��6   $ 0Q�6/   5      ._�5   
   � 	 � ColumnDefinitions	 5      �� 5      $	��200 �6#   �� 5      $��* �6#   
 � RowDefinitions
 5       �� 5!      $��75 �6    �� 5"      .+�5&      �� .+�5'      �� $��WageDoc��6   $��Center=�6+   $
��Left=�6F   $��	10,20,0,0q�6b   
�������$��22(�6�   5)      �� 5*      $��1��6   .+�5+      	� $
��Home��6   $��50��5,      
�������$��14(�5.         MenuButtonTheme#��[  5/       d� 	IsChecked$
 TrueY�50      ��51      �� *HomeViewCommand+	� 52      $��	Discovery��6   $��50��53      
�������$��14(�55      #��[  56      $ FalseY�57      ��58      �� *DiscoveryViewCommand+	� 59      $��	Discovery��6   $��50��5:      
�������$��14(�5<      #��[  5=      $ FalseY�5>      ��5?      �� *DiscoveryViewCommand+	� 5@      $��Featured��6   $��50��5A      
�������$��14(�5C      #��[  5D      5E      �� 5F      -   5        $��1��5F      
���  �� � ToolTip$ Close��66   $��10��6F   $��10��6Q   $��671,10,18,54q�6]   6s   �� 5I      $��1��6   
��� ���$��10��69   
��� ���$��10��6Y   $��644,10,45,54q�6e   5K      �� 5L      $	��250��6   $��40��6"   $��Center=�6.   $
��Left=�6I   $��5q�6d   $��1��6o     ModernTextbox#��[ 6   �� 5M      $��1��6   $��1��6*   $��10,10,10,10q�6:   ��6O   �� *CurrentView+�� 5N      $
��USER��6   $��1��6#   $
��Left=�63   $��
592,34,0,0q�6N   $	��Top=�6b   �� 5O      $��1��6   $
��Left=�6$   $��34��6?   $��
640,65,0,0q�6L   $	��Top=�6`   $��40��6x    J� RenderTransformOrigin$ 0.5,0.5&�6�   z�5P      V� 5Q      .~�5R      ��  �� ScaleY$ -1Q�6)   �� 5S      �� 5T      T� 5U      5V      5X      5Z      5\      5]      