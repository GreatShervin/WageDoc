   M S B A M L   `   `   `  ����E  AWageDocWPF, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null'clr-namespace:WageDocWPF
WageDocWPF  5   	       WageDocWPF.MainWindow   5   	   \ XPresentationFramework, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089W SPresentationCore, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   *localclr-namespace:WageDocWPF     5   	   b ^MaterialDesignThemes.Wpf, Version=4.0.0.2422, Culture=neutral, PublicKeyToken=df2a72020bd7962aFmaterialDesign1http://materialdesigninxaml.net/winfx/xaml/themes  5   	   -   5          � Title$  
MainWindow��5
   	   $	��450��6   $	��850��6)    � WindowStartupLocation$ CenterScreen=�65    � WindowStyle$
 None=�6Z    � 
ResizeMode$ NoResize=�6m   .��5      � ��5   
   �� 5       �� 
StartPoint$  0.1,0&�6"    �� EndPoint$ 0.9,1&�66   .��5      �  � Color$ #003534��6    � Offset$ 1Q�6/   � 5      $ #56776c��6   $ 0Q�6/   5      .+�5   
   �� $	��390��6   $	��Top=�6    �� CornerRadius$ 	0 0 180 0��66   ���#100E17$
��Left=�6d   $	��849��6   �� 5   
   	 �� Orientation$	 
Horizontal=�6   $
��Left=�6.   $	��831��6I   .+�5      �� $	��350��6   .+�5      �� $��Image/wagedoc.png��6   $	��300��63   $	��300��6?   $	��Top=�6L   $��30q�6d   $
��Fill=�6p   5      �� 5      $	��350��6   $��20 40q�6&   .+�5      �� $��
User Login��6   $��20q�6.   
�������
 �� TextAlignment$
 Center=�6M   $��38(�6d   $��Great Vibes)�6r   �� 5      $	 
Horizontal=�6   $��10q�66   .+�5      '  !MaterialDesignThemes.Wpf.PackIcon     Kind$
 User=�6.   $��25��6:   $��25��6E   
�������6Q   �� 5      -   5         ��Name$ txtUsername��5      $
��10 0q�63   )  #MaterialDesignThemes.Wpf.HintAssist   Hint$ Enter Username / Email��6A   
�������$	��250��6�   
������� �� 
CaretBrush �	#FFD94448 �� SelectionBrush �	#FFD944486�   5      �� 5      $	 
Horizontal=�6   $��10q�66   .+�5        $
 Lock=�6.   $��25��6:   $��25��6E   
�������6Q   G� 5       -   5         G�Name$ txtPassword��5    "   $
��10 0q�67   $ *****************��6E   
�������$	��250��6�   
������� G� 
CaretBrush �	#FFD94448 G� SelectionBrush �	#FFD944486�   5!      �� 5"      $��10q�6   $��Center=�6)   .+�5#      �� -   5         ��Name$ btnLogin��5%   @   $	��100��5#      $��40��6)      MaterialDesignRaisedButton#��[  65   +  %MaterialDesignThemes.Wpf.ButtonAssist   CornerRadius$ 10��5$      $��2q�6K   
������� � ToolTip$ Login��5%   0   $��Login��6R   ��5&      �� 5'      $  0.1,0&�62   $ 0.9,1&�6F   .��5(   "   � $ #003534��6/   $ 1Q�6?   � 5)   "   $ #56776c��6/   $ 0Q�6?   5*      ��5,      �� 5-      $  0.1,0&�62   $ 0.9,1&�6F   .��5.   "   � $ #003534��6/   $ 1Q�6?   � 5/   "   $ #56776c��6/   $ 0Q�6?   50      52      53      54      �� 55      $	��100��6   .+�56      �� -   5        $ btnExit��57   )   $��10 20q�56       , (MaterialDesignFloatingActionAccentButton#��[ 6(   $ Close��57      ��56   j   Z� .��58        $ Close=�6.   
�������$��30��6N   $��30��6Y   59      5:      5;      5<      5=      