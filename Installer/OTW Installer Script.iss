#define MyAppName       "My Room"
#define MyAppExeName    "OTW.exe"
#define QTDIR           "C:\Qt\4.8.4"
#define TimeStamp       GetFileDateTimeString('../out/otw.exe', 'dd/mm/yyyy-hh:nn:ss', '-', '-');

[Registry]
; set MY_ROOM_PATH
; Root: HKCU; Subkey: "Environment"; ValueType:string; ValueName:"MY_ROOM_INSTALL_PATH"; ValueData:{app}; Flags: preservestringtype
Root: HKLM; Subkey: "SYSTEM\CurrentControlSet\Control\Session Manager\Environment"; ValueType:string; ValueName:"MY_ROOM_INSTALL_PATH"; ValueData:{app}; Flags: preservestringtype

[Setup]
AppName={#MyAppName}
AppVerName={#MyAppName}
AppPublisher="Open The Windows"
AppPublisherURL="openthewindows.org"
AppVersion="1.0.0.{#TimeStamp}"
DefaultDirName={pf}\OTW
DefaultGroupName=OTW
UninstallDisplayIcon={app}\{#MyAppExeName}
Compression=lzma
;; Compression=none
SolidCompression=yes
OutputBaseFilename=Setup-My-Room-{#TimeStamp}
OutputDir=.
;; VersionInfoVersion="1.0.0.{#TimeStamp}"
VersionInfoDescription={#MyAppName}(Qt 4.8.4)
; Tell Windows Explorer to reload the environment
ChangesEnvironment=yes

[Dirs]
Name: "{app}";
Name: "{app}\html";
Name: "{app}\html\images";
Name: "{app}\html5applicationviewer";

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; WorkingDir: "{app}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
; @TODO Change icon from PNG to ICO format
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\images\logo-otw_0.png"; Check: checkDesktopIcon

[Code]
//util method, equivalent to C# string.StartsWith
function StartsWith(SubStr, S: String):Boolean;
begin
   Result:= Pos(SubStr, S) = 1;
end;

//util method, equivalent to C# string.Replace
function StringReplace(S, oldSubString, newSubString: String) : String;
var
  stringCopy : String;
begin
  stringCopy := S; //Prevent modification to the original string
  StringChange(stringCopy, oldSubString, newSubString);
  Result := stringCopy;
end;

//==================================================================
function GetCommandlineParam (inParamName: String):String;
var
   paramNameAndValue: String;
   i: Integer;
begin
   Result := '';

   for i:= 0 to ParamCount do
   begin
     paramNameAndValue := ParamStr(i);
     if (StartsWith(inParamName, paramNameAndValue)) then
     begin
       Result := StringReplace(paramNameAndValue, inParamName + '=', '');
       break;
     end;
   end;
end;

//==================================================================
function checkDesktopIcon(): Boolean;
var
  installDesktopIcon : String;
begin
  installDesktopIcon := GetCommandLineParam('desktopIcon');
  if installDesktopIcon = 'NO' then
    Result := FALSE
  else
  Result := TRUE
end;

[Files]
; MinGW runtime
Source: "{#QTDIR}\bin\libgcc_s_dw2-1.dll"; DestDir: "{app}";
Source: "{#QTDIR}\bin\mingwm10.dll"; DestDir: "{app}";
; Qt runtime
Source: "{#QTDIR}\bin\QtCore4.dll"; DestDir: "{app}";
Source: "{#QTDIR}\bin\QtGui4.dll"; DestDir: "{app}";
Source: "{#QTDIR}\bin\QtNetwork4.dll"; DestDir: "{app}";
Source: "{#QTDIR}\bin\QtWebKit4.dll"; DestDir: "{app}";
;; Source: "{#QTDIR}\bin\QtSql4.dll"; DestDir: "{app}";
;; Source: "{#QTDIR}\bin\QtSvg4.dll"; DestDir: "{app}";
; Qt imageformats
Source: "{#QTDIR}\plugins\imageformats\qsvg4.dll"; DestDir: "{app}\imageformats";
; Qt database related dlls
Source: "{#QTDIR}\plugins\sqldrivers\qsqlite4.dll"; DestDir: "{app}\sqldrivers";
; Qt icon engines
Source: "{#QTDIR}\plugins\iconengines\qsvgicon4.dll"; DestDir: "{app}\iconengines"; 
; My Room app
Source: "..\out\{#MyAppExeName}";  DestDir: "{app}"; Flags: ignoreversion;
; My Room images
Source: "../html/*"; Excludes: ".svn"; DestDir: "{app}/html"; Flags: ignoreversion recursesubdirs createallsubdirs; Permissions: everyone-full;
;; Source: "..\out\stylesheet.css";  DestDir: "{app}"; Flags: ignoreversion;
;; Source: "./stm32_vcp/VCP_V1.3.1_Setup.exe";  DestDir: "{tmp}"; Flags: ignoreversion replacesameversion;
;; Source: "./stm32_vcp/VCP_V1.3.1_Setup_x64.exe";  DestDir: "{tmp}"; DestName: "VCP_V1.3.1_Setup.exe"; Flags: ignoreversion replacesameversion; Check: IsWin64

[Run]
